var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export * from './figmaTypes';
import axios from 'axios';
var HttpsProxyAgent = require("https-proxy-agent");
export var Client = function (opts) {
    var headers = opts.accessToken
        ? {
            Authorization: "Bearer ".concat(opts.accessToken),
        }
        : {
            'X-Figma-Token': opts.personalAccessToken,
        };
    var client;
    if (!!process.env.https_proxy) {
        client = axios.create({
            baseURL: "https://".concat(opts.apiRoot || 'api.figma.com', "/v1/"),
            headers: headers,
            proxy: false,
            httpsAgent: new HttpsProxyAgent(process.env.https_proxy),
        });
    }
    else {
        client = axios.create({
            baseURL: "https://".concat(opts.apiRoot || 'api.figma.com', "/v1/"),
            headers: headers,
        });
    }
    return {
        client: client,
        file: function (fileId, params) {
            if (params === void 0) { params = {}; }
            return client.get("files/".concat(fileId), {
                params: __assign(__assign({}, params), { ids: params.ids ? params.ids.join(',') : '' }),
            });
        },
        fileVersions: function (fileId) { return client.get("files/".concat(fileId, "/versions")); },
        fileNodes: function (fileId, params) {
            return client.get("files/".concat(fileId, "/nodes"), {
                params: __assign(__assign({}, params), { ids: params.ids.join(',') }),
            });
        },
        fileImages: function (fileId, params) {
            return client.get("images/".concat(fileId), {
                params: __assign(__assign({}, params), { ids: params.ids.join(',') }),
            });
        },
        fileImageFills: function (fileId) { return client.get("files/".concat(fileId, "/images")); },
        comments: function (fileId) { return client.get("files/".concat(fileId, "/comments")); },
        postComment: function (fileId, params) {
            return client.post("files/".concat(fileId, "/comments"), params);
        },
        deleteComment: function (fileId, commentId) {
            return client.delete("files/".concat(fileId, "/comments/").concat(commentId));
        },
        me: function () { return client.get("me"); },
        teamProjects: function (teamId) { return client.get("teams/".concat(teamId, "/projects")); },
        projectFiles: function (projectId) { return client.get("projects/".concat(projectId, "/files")); },
        teamComponents: function (teamId, params) {
            if (params === void 0) { params = {}; }
            return client.get("teams/".concat(teamId, "/components"), { params: params });
        },
        fileComponents: function (fileId) { return client.get("files/".concat(fileId, "/components")); },
        component: function (key) { return client.get("components/".concat(key)); },
        teamComponentSets: function (teamId, params) {
            if (params === void 0) { params = {}; }
            return client.get("teams/".concat(teamId, "/component_sets"), { params: params });
        },
        fileComponentSets: function (fileId) { return client.get("files/".concat(fileId, "/component_sets")); },
        componentSet: function (key) { return client.get("component_set/".concat(key)); },
        teamStyles: function (teamId, params) {
            if (params === void 0) { params = {}; }
            return client.get("teams/".concat(teamId, "/styles"), { params: params });
        },
        fileStyles: function (fileId) { return client.get("files/".concat(fileId, "/styles")); },
        style: function (key) { return client.get("styles/".concat(key)); },
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxjQUFjLGNBQWMsQ0FBQztBQUM3QixPQUFPLEtBQXNDLE1BQU0sT0FBTyxDQUFDO0FBQzNELElBQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBeVVyRCxNQUFNLENBQUMsSUFBTSxNQUFNLEdBQUcsVUFBQyxJQUFtQjtJQUN4QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVztRQUM5QixDQUFDLENBQUM7WUFDRSxhQUFhLEVBQUUsaUJBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBRTtTQUM1QztRQUNILENBQUMsQ0FBQztZQUNFLGVBQWUsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzFDLENBQUM7SUFFTixJQUFJLE1BQU0sQ0FBQztJQUVYLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1FBQzdCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3BCLE9BQU8sRUFBRSxrQkFBVyxJQUFJLENBQUMsT0FBTyxJQUFJLGVBQWUsU0FBTTtZQUN6RCxPQUFPLFNBQUE7WUFDUCxLQUFLLEVBQUUsS0FBSztZQUNaLFVBQVUsRUFBRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztTQUN6RCxDQUFDLENBQUM7S0FDSjtTQUFNO1FBQ0wsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDcEIsT0FBTyxFQUFFLGtCQUFXLElBQUksQ0FBQyxPQUFPLElBQUksZUFBZSxTQUFNO1lBQ3pELE9BQU8sU0FBQTtTQUNSLENBQUMsQ0FBQztLQUNKO0lBRUQsT0FBTztRQUNMLE1BQU0sUUFBQTtRQUVOLElBQUksRUFBRSxVQUFDLE1BQU0sRUFBRSxNQUFXO1lBQVgsdUJBQUEsRUFBQSxXQUFXO1lB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