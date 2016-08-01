import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Courses = new Mongo.Collection('Courses');
export const YeshivaCourses = new Mongo.Collection('YeshivaCourses');
export const SternCourses = new Mongo.Collection('SternCourses');

if (Meteor.isServer) {
  // basic aggregation pipeline restructures courses into department > course > offering
  // hierarchy for UI
  const aggregateByDept = [
    { $match: { "display.dow": { $not: /^$/}} },
    { $group: {_id: {department: "$department", code: "$code", crn: "$id"},
               code: {$first: "$code"},
               credits: {$first: "$credits"},
               crn: {$first: "$id"},
               department: {$first: "$department"},
               instructor: {$first: "$instructor"},
               subject: {$first: "$subject"},
               slots: {$push: "$$ROOT"},
               title: {$first: "$title"},
              }},
    { $project: {_id: 0, code: 1, credits: 1, crn: 1, 
                 department: 1, instructor: 1, subject: 1, slots: 1, title: 1}},
    { $sort: {"crn": 1}},
    { $group: {_id: {department: "$department", code: "$code"},
               subject: {$first: "$subject"},
               offerings: { $push: "$$ROOT" },
               code: {$first: "$code"},
               credits: {$first: "$credits"},
               department: {$first: "$department"},
               title: {$first: "$title"},
     } },
     { $project: {_id: 0, offerings: 1, department: 1, title: 1, code: 1, credits: 1, subject: 1}},
     { $sort: {"code": 1}},
     { $group: {_id: "$department",
                courses: { $push: "$$ROOT" }
     }},
     { $sort: {_id: 1}}
    ];
  // pipeline generator that accepts user searchTerms to filter courses that are aggregated.
  // Currently not in use due to jQuery show/hiding of matches that avoids extra server requests
  var generatePipeline = function(searchTerms) {
    var pipeline = [],
      matchArr = [], matcher = '', advancedMatcher = '', basicMatcher = '';
    if (!searchTerms) {
      pipeline = aggregateByDept;
    }
    else {
      if (searchTerms.hasOwnProperty('advanced')) {
        var keys = searchTerms.advanced.keys();
        advancedMatcher = { 
          $and: keys.map(function(key) {
            var obj = {};
            obj[key] = {$regex:"(^| )" + searchTerms[key] + ".*", $options: 'i'};
            return obj;
          })
        };
        matchArr.push(advancedMatcher);
      }
      if (searchTerms.hasOwnProperty('basic')) {
        var basic = searchTerms.basic;
        var basicArr = [];
        if (!isNaN(basic)) {
          // if (basic.length === 3) {
          //   basicArr.push({"section": basic});
          // }
          if (basic.length <= 5) {
            basicArr.push({"id": { $regex: "^" + basic }});
          }
        }
        else {
          basicArr.push({"code":       { $regex: "^" + basic + ".*", $options: 'i' }});
          basicArr.push({"department": { $regex: "^" + basic + ".*", $options: 'i' }});
          // basicArr.push({"display":    { $regex: "(^| )" + basic + ".*", $options: 'i' }});
          basicArr.push({"instructor": { $regex: "(^| )" + basic + ".*", $options: 'i' }});
          basicArr.push({"title":      { $regex: "(^| )" + basic + ".*", $options: 'i' }});
        }
        basicMatcher = { $or: basicArr };
        matchArr.push(basicMatcher);
      }
      if (matchArr.length === 2) {
        matcher = {$match: { $and: matchArr } };
      }
      else if (matchArr.length === 1) {
        matcher = {$match: matchArr[0]};
      }
      if (matcher) {
        pipeline = [].concat(matcher, aggregateByDept);
      }
      else {
        pipeline = aggregateByDept;
      }
    }
    return pipeline;
  };
  Meteor.publish('Courses', function CoursesPublication() {
    return Courses.find({})
  })
  Meteor.methods({
    'YeshivaCourses.byDept'(searchTerms) {
      return YeshivaCourses.aggregate(generatePipeline(searchTerms));
    },
    'SternCourses.byDept'(searchTerms) {
      return SternCourses.aggregate(generatePipeline(searchTerms));
    },
    'Courses.getUniversities'() {
      return Courses.aggregate([
        {$group: {_id: "$university"}}
      ]);
    },
    'Courses.getSemesters'({university}) {
      // check(university, 'String');
      return Courses.aggregate([
        {$match: {"university": university}},
        {$group: {_id: "$semester"}}
      ]);
    },
    'Courses.getColleges'({university, semester}) {
      // check(semester, 'String');
      return Courses.aggregate([
        {$match: {"university": university, "semester": semester}},
        {$group: {_id: "$college"}}
      ]);
    }
  });
}