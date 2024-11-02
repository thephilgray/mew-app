"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("@react-email/components");
var baseUrl = process.env.GATSBY_CLOUDFRONT_DISTRIBUTION;
var appUrl = "".concat(process.env.GATSBY_APP_URL, "/app");
var MewDigest = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var _k = _a.assignment, assignment = _k === void 0 ? {} : _k, _l = _a.comments, comments = _l === void 0 ? [] : _l, _m = _a.groupComments, groupComments = _m === void 0 ? [] : _m, _o = _a.breakoutGroupMembers, breakoutGroupMembers = _o === void 0 ? [] : _o, breakoutGroupName = _a.breakoutGroupName;
    return (react_1.default.createElement(components_1.Html, null,
        react_1.default.createElement(components_1.Head, null),
        react_1.default.createElement(components_1.Body, { style: { fontFamily: 'Arial, sans-serif', color: '#333' } },
            react_1.default.createElement(components_1.Container, null,
                react_1.default.createElement("header", { style: { backgroundColor: '#f8f8f8', padding: '10px 20px', textAlign: 'center' } },
                    react_1.default.createElement(components_1.Img, { src: "".concat(baseUrl, "/public/media/mewlogo.png"), width: "212", height: "212", alt: "MEW", style: logo })),
                react_1.default.createElement("main", { style: { padding: '20px' } },
                    react_1.default.createElement("section", { style: { marginBottom: '20px', textAlign: 'center' } },
                        react_1.default.createElement(components_1.Heading, { as: "h2", style: { textAlign: 'center', color: '#333' } }, "Check out the latest activity on the MEW app!"),
                        react_1.default.createElement(components_1.Link, { href: (assignment === null || assignment === void 0 ? void 0 : assignment.playlistExternalUrl) || ((_b = assignment === null || assignment === void 0 ? void 0 : assignment.playlist) === null || _b === void 0 ? void 0 : _b.id) ? "".concat(appUrl, "/playlists/").concat((_c = assignment === null || assignment === void 0 ? void 0 : assignment.playlist) === null || _c === void 0 ? void 0 : _c.id) : "".concat(appUrl, "/assignments/").concat(assignment === null || assignment === void 0 ? void 0 : assignment.id, "/playlist"), style: { textDecoration: 'none', color: '#333' } },
                            react_1.default.createElement(components_1.Img, { src: "".concat(baseUrl, "/public/").concat(((_e = (_d = assignment === null || assignment === void 0 ? void 0 : assignment.playlist) === null || _d === void 0 ? void 0 : _d.artwork) === null || _e === void 0 ? void 0 : _e.path) || ((_f = assignment === null || assignment === void 0 ? void 0 : assignment.artwork) === null || _f === void 0 ? void 0 : _f.path) || ((_h = (_g = assignment === null || assignment === void 0 ? void 0 : assignment.workshop) === null || _g === void 0 ? void 0 : _g.artwork) === null || _h === void 0 ? void 0 : _h.path)), alt: "Playlist Cover", style: { width: '100%', maxWidth: '600px', borderRadius: '10px', display: 'block', margin: '0 auto' } }),
                            react_1.default.createElement(components_1.Text, null, ((_j = assignment === null || assignment === void 0 ? void 0 : assignment.playlist) === null || _j === void 0 ? void 0 : _j.title) || (assignment === null || assignment === void 0 ? void 0 : assignment.title)))),
                    comments.length > 0 && (react_1.default.createElement("section", null,
                        react_1.default.createElement(components_1.Heading, { as: "h3", style: { color: '#333' } }, "Recent Feedback for You"),
                        react_1.default.createElement(components_1.Text, null,
                            "(Below is a selection of ",
                            comments.length > 5 ? 5 : comments.length,
                            " of the most recent comments. ",
                            react_1.default.createElement(components_1.Link, { href: "".concat(appUrl, "/feedback"), style: { textDecoration: 'none', color: '#E092A2' } }, "See more in the Feed app."),
                            ")"),
                        react_1.default.createElement("ul", { style: { listStyleType: 'none', padding: 0, width: '100%' } }, comments.map(function (comment, index) {
                            var _a, _b, _c, _d, _e, _f, _g, _h;
                            return (react_1.default.createElement("li", { key: index, style: { marginBottom: '20px', borderBottom: '1px solid #eaeaea', paddingBottom: '10px', width: '100%' } },
                                react_1.default.createElement(components_1.Container, { style: { display: 'flex', alignItems: 'center', width: '100%' } },
                                    react_1.default.createElement(components_1.Row, { style: { gap: '10px', alignItems: 'center', width: '100%' } },
                                        react_1.default.createElement(components_1.Column, { style: { flex: '0 0 auto' } },
                                            react_1.default.createElement(components_1.Link, { href: "".concat(appUrl, "/profile/").concat(comment.profile.id), style: { textDecoration: 'none', color: '#333' } },
                                                react_1.default.createElement(components_1.Img, { src: "".concat(baseUrl, "/public/").concat(((_a = comment === null || comment === void 0 ? void 0 : comment.profile) === null || _a === void 0 ? void 0 : _a.avatar) || 'media/mewlogo.png'), alt: ((_b = comment === null || comment === void 0 ? void 0 : comment.profile) === null || _b === void 0 ? void 0 : _b.displayName) || ((_c = comment === null || comment === void 0 ? void 0 : comment.profile) === null || _c === void 0 ? void 0 : _c.name), style: { borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' } }))),
                                        react_1.default.createElement(components_1.Column, { style: { flex: '1', padding: '0 10px' } },
                                            react_1.default.createElement("strong", null, ((_d = comment === null || comment === void 0 ? void 0 : comment.profile) === null || _d === void 0 ? void 0 : _d.displayName) || ((_e = comment === null || comment === void 0 ? void 0 : comment.profile) === null || _e === void 0 ? void 0 : _e.name) || 'Anonymous'),
                                            react_1.default.createElement(components_1.Text, { style: { margin: 0, color: '#999' } }, new Date(comment === null || comment === void 0 ? void 0 : comment.createdAt).toLocaleDateString()),
                                            react_1.default.createElement(components_1.Link, { style: link, href: (assignment === null || assignment === void 0 ? void 0 : assignment.playlist) ? "".concat(appUrl, "/playlists/").concat(assignment.playlist.id, "?track=").concat((_f = comment === null || comment === void 0 ? void 0 : comment.submission) === null || _f === void 0 ? void 0 : _f.id) : "".concat(appUrl, "/assignments/").concat(assignment === null || assignment === void 0 ? void 0 : assignment.id, "/playlist?track=").concat((_g = comment === null || comment === void 0 ? void 0 : comment.submission) === null || _g === void 0 ? void 0 : _g.id) },
                                                react_1.default.createElement(components_1.Text, null, (_h = comment === null || comment === void 0 ? void 0 : comment.submission) === null || _h === void 0 ? void 0 : _h.name))),
                                        react_1.default.createElement(components_1.Column, { style: { flex: '2', padding: '0 10px' } },
                                            react_1.default.createElement(components_1.Text, { style: { marginTop: '10px' } }, comment === null || comment === void 0 ? void 0 : comment.content))))));
                        })))),
                    groupComments.length > 0 && (react_1.default.createElement("section", null,
                        react_1.default.createElement(components_1.Heading, { as: "h3", style: { color: '#333' } }, "Recent Activity From Your Group"),
                        react_1.default.createElement(components_1.Text, null,
                            "(Below is just a selection of ",
                            groupComments.length > 5 ? 5 : groupComments.length,
                            " of the most recent comments. ",
                            react_1.default.createElement(components_1.Link, { href: "".concat(appUrl, "/feedback"), style: { textDecoration: 'none', color: '#E092A2' } }, "See more in the app."),
                            ")"),
                        react_1.default.createElement("ul", { style: { listStyleType: 'none', padding: 0, width: '100%' } }, groupComments.map(function (comment, index) {
                            var _a, _b, _c, _d, _e, _f, _g, _h;
                            return (react_1.default.createElement("li", { key: index, style: { marginBottom: '20px', borderBottom: '1px solid #eaeaea', paddingBottom: '10px', width: '100%' } },
                                react_1.default.createElement(components_1.Container, { style: { display: 'flex', alignItems: 'center', width: '100%' } },
                                    react_1.default.createElement(components_1.Row, { style: { gap: '10px', alignItems: 'center', width: '100%' } },
                                        react_1.default.createElement(components_1.Column, { style: { flex: '0 0 auto' } },
                                            react_1.default.createElement(components_1.Link, { href: "".concat(appUrl, "/profile/").concat(comment.profile.id), style: { textDecoration: 'none', color: '#333' } },
                                                react_1.default.createElement(components_1.Img, { src: "".concat(baseUrl, "/public/").concat(((_a = comment === null || comment === void 0 ? void 0 : comment.profile) === null || _a === void 0 ? void 0 : _a.avatar) || 'media/mewlogo.png'), alt: ((_b = comment === null || comment === void 0 ? void 0 : comment.profile) === null || _b === void 0 ? void 0 : _b.displayName) || ((_c = comment === null || comment === void 0 ? void 0 : comment.profile) === null || _c === void 0 ? void 0 : _c.name), style: { borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' } }))),
                                        react_1.default.createElement(components_1.Column, { style: { flex: '1', padding: '0 10px' } },
                                            react_1.default.createElement("strong", null, ((_d = comment === null || comment === void 0 ? void 0 : comment.profile) === null || _d === void 0 ? void 0 : _d.displayName) || ((_e = comment === null || comment === void 0 ? void 0 : comment.profile) === null || _e === void 0 ? void 0 : _e.name) || 'Anonymous'),
                                            react_1.default.createElement(components_1.Text, { style: { margin: 0, color: '#999' } }, new Date(comment === null || comment === void 0 ? void 0 : comment.createdAt).toLocaleDateString()),
                                            react_1.default.createElement(components_1.Link, { style: link, href: (assignment === null || assignment === void 0 ? void 0 : assignment.playlist) ? "".concat(appUrl, "/playlists/").concat(assignment.playlist.id, "?track=").concat((_f = comment === null || comment === void 0 ? void 0 : comment.submission) === null || _f === void 0 ? void 0 : _f.id) : "".concat(appUrl, "/assignments/").concat(assignment === null || assignment === void 0 ? void 0 : assignment.id, "/playlist?track=").concat((_g = comment === null || comment === void 0 ? void 0 : comment.submission) === null || _g === void 0 ? void 0 : _g.id) },
                                                react_1.default.createElement(components_1.Text, null, (_h = comment === null || comment === void 0 ? void 0 : comment.submission) === null || _h === void 0 ? void 0 : _h.name))),
                                        react_1.default.createElement(components_1.Column, { style: { flex: '2', padding: '0 10px' } },
                                            react_1.default.createElement(components_1.Text, { style: { marginTop: '10px' } }, comment === null || comment === void 0 ? void 0 : comment.content))))));
                        })))),
                    breakoutGroupName && breakoutGroupMembers.length > 0 && (react_1.default.createElement("section", null,
                        react_1.default.createElement(components_1.Heading, { as: "h3", style: { color: '#333' } },
                            "Keep up with members in the ",
                            react_1.default.createElement("em", null, breakoutGroupName),
                            " group:"),
                        react_1.default.createElement("ul", { style: { listStyleType: 'none', padding: 0, width: '100%' } }, breakoutGroupMembers.map(function (member, index) { return (react_1.default.createElement("li", { key: index, style: { marginBottom: '20px', borderBottom: '1px solid #eaeaea', paddingBottom: '10px', width: '100%' } },
                            react_1.default.createElement(components_1.Container, { style: { display: 'flex', alignItems: 'center', width: '100%' } },
                                react_1.default.createElement(components_1.Row, { style: { gap: '10px', alignItems: 'center', width: '100%' } },
                                    react_1.default.createElement(components_1.Column, { style: { flex: '0 0 auto' } },
                                        react_1.default.createElement(components_1.Link, { href: "".concat(appUrl, "/profile/").concat(member.profile.id), style: { textDecoration: 'none', color: '#333' } },
                                            react_1.default.createElement(components_1.Img, { src: "".concat(baseUrl, "/public/").concat(member.profile.avatar || 'media/mewlogo.png'), alt: member.profile.displayName || member.profile.name, style: { borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' } }))),
                                    react_1.default.createElement(components_1.Column, { style: { flex: '1', padding: '0 10px' } },
                                        react_1.default.createElement("strong", null, member.profile.displayName || member.profile.name || 'Anonymous')),
                                    react_1.default.createElement(components_1.Column, { style: { flex: '0 0 auto' } },
                                        react_1.default.createElement(components_1.Link, { href: "mailto:".concat(member.email), style: { textDecoration: 'none', color: '#333' } },
                                            react_1.default.createElement(components_1.Text, null, "Send Email"))))))); }))))),
                react_1.default.createElement("footer", { style: { backgroundColor: '#f8f8f8', padding: '10px 20px', textAlign: 'center' } },
                    react_1.default.createElement(components_1.Text, { style: { margin: 0 } },
                        "You are receiving this email because you have email digest notifications enabled in the MEW app. Manage your notifications in your ",
                        react_1.default.createElement(components_1.Link, { href: "https://www.musiceveryweek.org/app/profile/edit", style: link }, "profile"),
                        "."))))));
};
exports.default = MewDigest;
var main = {
    backgroundColor: '#ffffff',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
};
var container = {
    backgroundColor: '#ffffff',
    border: '1px solid #eee',
    borderRadius: '5px',
    boxShadow: '0 5px 10px rgba(20,50,70,.2)',
    marginTop: '20px',
    width: '360px',
    margin: '0 auto',
    padding: '68px 0 130px',
    textAlign: "center"
};
var logo = {
    margin: '0 auto',
};
var tertiary = {
    color: '#E092A2',
    fontSize: '11px',
    fontWeight: 700,
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    height: '16px',
    letterSpacing: '0',
    lineHeight: '16px',
    margin: '16px 8px 8px 8px',
    textTransform: 'uppercase',
    textAlign: 'center',
};
var secondary = {
    color: '#63625E',
    display: 'inline-block',
    fontFamily: 'HelveticaNeue-Medium,Helvetica,Arial,sans-serif',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '24px',
    marginBottom: '0',
    marginTop: '0',
    textAlign: 'center',
};
var codeContainer = {
    background: 'rgba(0,0,0,.05)',
    borderRadius: '4px',
    margin: '16px auto 14px',
    verticalAlign: 'middle',
    width: '280px',
};
var code = {
    color: '#E092A2',
    display: 'inline-block',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: '32px',
    fontWeight: 700,
    letterSpacing: '6px',
    lineHeight: '40px',
    paddingBottom: '8px',
    paddingTop: '8px',
    margin: '0 auto',
    width: '100%',
    textAlign: 'center',
};
var button = {
    backgroundColor: "#E092A2",
    color: "#fff",
    borderRadius: "0.5em",
    display: 'inline-block',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: '32px',
    fontWeight: 700,
    letterSpacing: '6px',
    lineHeight: '40px',
    paddingBottom: '8px',
    paddingTop: '8px',
    margin: '16px auto',
    width: '100%',
    textAlign: 'center',
};
var paragraph = {
    color: '#63625E',
    fontSize: '15px',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    letterSpacing: '0',
    lineHeight: '23px',
    padding: '0 40px',
    margin: '0',
    textAlign: 'center',
};
var small = {
    color: '#63625E',
    fontSize: '12px',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    letterSpacing: '0',
    lineHeight: '18px',
    padding: '0 40px',
    margin: '0',
    textAlign: 'center',
};
var link = {
    color: '#E092A2',
    textDecoration: 'underline',
};
var footer = {
    color: '#63625E',
    fontSize: '12px',
    fontWeight: 800,
    letterSpacing: '0',
    lineHeight: '23px',
    margin: '0',
    marginTop: '20px',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
    textAlign: 'center',
    textTransform: 'uppercase',
};
