"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
var axios_1 = __importDefault(require("axios"));
var mailersend_1 = require("mailersend");
var render_1 = require("@react-email/render");
var mew_digest_1 = __importDefault(require("./mew-digest"));
var react_1 = __importDefault(require("react"));
var handler = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var workshopId, GRAPHQL_ENDPOINT, GRAPHQL_API_KEY, MAILER_SEND_API_KEY, generateEmailContent, queryGraphQL, sendEmail, getPastDueAssignments, getCommentsOnSubmissions, getActiveMembers, days, pastDueAssignments, activeMembers, emailCommentsMap, _i, pastDueAssignments_1, assignment, _loop_1, _a, _b, submission, _c, _d, _e, email, _f, comments, groupComments, breakoutGroupMembers, breakoutGroupName, mostRecentAssignment, emailContent;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                console.log("EVENT: ".concat(JSON.stringify(event)));
                workshopId = event.arguments.workshopId;
                GRAPHQL_ENDPOINT = process.env.API_MEWAPP_GRAPHQLAPIENDPOINTOUTPUT;
                GRAPHQL_API_KEY = process.env.API_MEWAPP_GRAPHQLAPIKEYOUTPUT;
                MAILER_SEND_API_KEY = process.env.MAILER_SEND_API_KEY;
                generateEmailContent = function (assignment, comments, groupComments, breakoutGroupMembers, breakoutGroupName) { return __awaiter(void 0, void 0, void 0, function () {
                    var html;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (0, render_1.render)(react_1.default.createElement(mew_digest_1.default, { assignment: assignment, comments: comments, groupComments: groupComments, breakoutGroupMembers: breakoutGroupMembers, breakoutGroupName: breakoutGroupName }))];
                            case 1:
                                html = _a.sent();
                                return [2 /*return*/, html];
                        }
                    });
                }); };
                queryGraphQL = function (query, variables) { return __awaiter(void 0, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, axios_1.default.post(GRAPHQL_ENDPOINT, { query: query, variables: variables }, {
                                    headers: {
                                        'x-api-key': GRAPHQL_API_KEY,
                                    },
                                })];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.data.data];
                        }
                    });
                }); };
                sendEmail = function (to, subject, htmlContent) { return __awaiter(void 0, void 0, void 0, function () {
                    var mailerSend, emailParams;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                mailerSend = new mailersend_1.MailerSend({
                                    apiKey: MAILER_SEND_API_KEY,
                                });
                                emailParams = new mailersend_1.EmailParams()
                                    .setFrom(new mailersend_1.Sender('support@musiceveryweek.org', 'MEW (Music Every Week)'))
                                    .setTo([new mailersend_1.Recipient(to)])
                                    .setSubject(subject)
                                    .setHtml(htmlContent);
                                return [4 /*yield*/, mailerSend.email.send(emailParams)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); };
                getPastDueAssignments = function (days) { return __awaiter(void 0, void 0, void 0, function () {
                    var query, variables, response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                query = "\n            query listAssignments($filter: ModelFileRequestFilterInput) {\n                listFileRequests(filter: $filter) {\n                    items {\n                        id\n                        title\n                        expiration\n                        workshop {\n                            artwork {\n                                path\n                            }\n                        }\n                        artwork {\n                            path\n                        }\n                        playlist {\n                            id\n                            artwork {\n                                path\n                            }\n                        }\n                        workshopId\n                        playlistExternalUrl\n                        submissions {\n                            items {\n                                breakoutGroupId\n                                breakoutGroup {\n                                    id\n                                    name\n                                }\n                                profile {\n                                    id\n                                    email\n                                    displayName\n                                    avatar\n                                    name\n                                    memberships {\n                                        items {\n                                            id\n                                            workshopId\n                                        }\n                                    }\n                                    notificationSettings {\n                                        emailDigest {\n                                            enabled\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        ";
                                variables = {
                                    filter: {
                                        expiration: {
                                            between: [new Date(new Date().setDate(new Date().getDate() - days)).toISOString(), new Date().toISOString()]
                                        },
                                        workshopId: { eq: workshopId }
                                    }
                                };
                                return [4 /*yield*/, queryGraphQL(query, variables)];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.listFileRequests.items];
                        }
                    });
                }); };
                getCommentsOnSubmissions = function (email, onlyUserOrExclude) { return __awaiter(void 0, void 0, void 0, function () {
                    var query, variables, response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                query = "\n            query GetCommentsOnSubmissions($filter: ModelCommentFilterInput) {\n                listComments(filter: $filter) {\n                    items {\n                        content\n                        submission {\n                            id\n                            name\n                            breakoutGroup {\n                                id\n                                name\n                            }\n                            breakoutGroupId\n                        }\n                        submissionId\n                        createdAt\n                        profile {\n                            id\n                            email\n                            displayName\n                            name\n                            avatar\n                        }\n                    }\n                }\n            }\n        ";
                                variables = {
                                    filter: {
                                        email: { ne: email },
                                        recipientEmail: onlyUserOrExclude ? { eq: email } : { ne: email },
                                        workshopId: { eq: workshopId }
                                    }
                                };
                                return [4 /*yield*/, queryGraphQL(query, variables)];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.listComments.items];
                        }
                    });
                }); };
                getActiveMembers = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var query, variables, response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                query = "\n            query ListMembers($filter: ModelMembershipFilterInput) {\n                listMemberships(filter: $filter) {\n                    items {\n                        id\n                        email\n                        profile {\n                            id\n                            avatar\n                            displayName\n                            name\n                        }\n                        breakoutGroupId\n                        breakoutGroup {\n                            id\n                            name\n                        }\n                    }\n                }\n            }\n        ";
                                variables = {
                                    filter: {
                                        status: {
                                            eq: "ACTIVE"
                                        },
                                        workshopId: { eq: workshopId }
                                    }
                                };
                                return [4 /*yield*/, queryGraphQL(query, variables)];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, response.listMemberships.items];
                        }
                    });
                }); };
                days = 7;
                return [4 /*yield*/, getPastDueAssignments(days)];
            case 1:
                pastDueAssignments = _g.sent();
                return [4 /*yield*/, getActiveMembers()];
            case 2:
                activeMembers = _g.sent();
                emailCommentsMap = {};
                _i = 0, pastDueAssignments_1 = pastDueAssignments;
                _g.label = 3;
            case 3:
                if (!(_i < pastDueAssignments_1.length)) return [3 /*break*/, 8];
                assignment = pastDueAssignments_1[_i];
                _loop_1 = function (submission) {
                    var email, emailDigestEnabled, member, comments, groupComments, userBreakoutGroupId_1, filteredSortedGroupComments;
                    var _h, _j;
                    return __generator(this, function (_k) {
                        switch (_k.label) {
                            case 0:
                                email = submission.profile.email;
                                emailDigestEnabled = submission.profile.notificationSettings && submission.profile.notificationSettings.emailDigest && submission.profile.notificationSettings.emailDigest.enabled;
                                member = activeMembers.find(function (m) { return m.email === email; });
                                if (!(member && emailDigestEnabled)) return [3 /*break*/, 3];
                                if (!emailCommentsMap[email]) {
                                    emailCommentsMap[email] = { comments: [], groupComments: [], breakoutGroupMembers: [], mostRecentAssignment: null };
                                }
                                return [4 /*yield*/, getCommentsOnSubmissions(email, true)];
                            case 1:
                                comments = _k.sent();
                                return [4 /*yield*/, getCommentsOnSubmissions(email, false)];
                            case 2:
                                groupComments = _k.sent();
                                userBreakoutGroupId_1 = member.breakoutGroupId;
                                filteredSortedGroupComments = groupComments.filter(function (c) { return c.email !== email; });
                                // if the user is in a breakout group, sort the group comments so that the user's group comments are shown first
                                if (userBreakoutGroupId_1) {
                                    filteredSortedGroupComments = groupComments.sort(function (a, b) { var _a, _b; return (((_a = a.submission) === null || _a === void 0 ? void 0 : _a.breakoutGroupId) === userBreakoutGroupId_1 ? -1 : 1) - (((_b = b.submission) === null || _b === void 0 ? void 0 : _b.breakoutGroupId) === userBreakoutGroupId_1 ? -1 : 1); });
                                    emailCommentsMap[email].breakoutGroupMembers = activeMembers.filter(function (m) { return m.breakoutGroupId === userBreakoutGroupId_1; }).filter(function (m) { return m.email !== email; });
                                    emailCommentsMap[email].breakoutGroupName = member.breakoutGroup.name;
                                }
                                (_h = emailCommentsMap[email].comments).push.apply(_h, comments);
                                (_j = emailCommentsMap[email].groupComments).push.apply(_j, filteredSortedGroupComments);
                                emailCommentsMap[email].mostRecentAssignment = assignment;
                                _k.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                };
                _a = 0, _b = assignment.submissions.items;
                _g.label = 4;
            case 4:
                if (!(_a < _b.length)) return [3 /*break*/, 7];
                submission = _b[_a];
                return [5 /*yield**/, _loop_1(submission)];
            case 5:
                _g.sent();
                _g.label = 6;
            case 6:
                _a++;
                return [3 /*break*/, 4];
            case 7:
                _i++;
                return [3 /*break*/, 3];
            case 8:
                _c = 0, _d = Object.entries(emailCommentsMap);
                _g.label = 9;
            case 9:
                if (!(_c < _d.length)) return [3 /*break*/, 13];
                _e = _d[_c], email = _e[0], _f = _e[1], comments = _f.comments, groupComments = _f.groupComments, breakoutGroupMembers = _f.breakoutGroupMembers, breakoutGroupName = _f.breakoutGroupName, mostRecentAssignment = _f.mostRecentAssignment;
                return [4 /*yield*/, generateEmailContent(mostRecentAssignment, comments.slice(0, 5), groupComments.slice(0, 5), breakoutGroupMembers, breakoutGroupName)];
            case 10:
                emailContent = _g.sent();
                return [4 /*yield*/, sendEmail(email, "Your Weekly Digest", emailContent)];
            case 11:
                _g.sent();
                _g.label = 12;
            case 12:
                _c++;
                return [3 /*break*/, 9];
            case 13: return [2 /*return*/, {
                    statusCode: 200,
                    // Uncomment below to enable CORS requests
                    // headers: {
                    //     "Access-Control-Allow-Origin": "*",
                    //     "Access-Control-Allow-Headers": "*"
                    // },
                    body: JSON.stringify('Hello from Lambda!'),
                }];
        }
    });
}); };
exports.handler = handler;
