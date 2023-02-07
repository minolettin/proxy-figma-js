"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
__exportStar(require("./figmaTypes"), exports);
const axios_1 = __importDefault(require("axios"));
const HttpsProxyAgent = require("https-proxy-agent");
const Client = (opts) => {
    const headers = opts.accessToken
        ? {
            Authorization: `Bearer ${opts.accessToken}`,
        }
        : {
            'X-Figma-Token': opts.personalAccessToken,
        };
    let client;
    if (!!process.env.https_proxy) {
        client = axios_1.default.create({
            baseURL: `https://${opts.apiRoot || 'api.figma.com'}/v1/`,
            headers,
            proxy: false,
            httpsAgent: new HttpsProxyAgent(process.env.https_proxy),
        });
    }
    else {
        client = axios_1.default.create({
            baseURL: `https://${opts.apiRoot || 'api.figma.com'}/v1/`,
            headers,
        });
    }
    return {
        client,
        file: (fileId, params = {}) => client.get(`files/${fileId}`, {
            params: Object.assign(Object.assign({}, params), { ids: params.ids ? params.ids.join(',') : '' }),
        }),
        fileVersions: (fileId) => client.get(`files/${fileId}/versions`),
        fileNodes: (fileId, params) => client.get(`files/${fileId}/nodes`, {
            params: Object.assign(Object.assign({}, params), { ids: params.ids.join(',') }),
        }),
        fileImages: (fileId, params) => client.get(`images/${fileId}`, {
            params: Object.assign(Object.assign({}, params), { ids: params.ids.join(',') }),
        }),
        fileImageFills: (fileId) => client.get(`files/${fileId}/images`),
        comments: (fileId) => client.get(`files/${fileId}/comments`),
        postComment: (fileId, params) => client.post(`files/${fileId}/comments`, params),
        deleteComment: (fileId, commentId) => client.delete(`files/${fileId}/comments/${commentId}`),
        me: () => client.get(`me`),
        teamProjects: (teamId) => client.get(`teams/${teamId}/projects`),
        projectFiles: (projectId) => client.get(`projects/${projectId}/files`),
        teamComponents: (teamId, params = {}) => client.get(`teams/${teamId}/components`, { params }),
        fileComponents: (fileId) => client.get(`files/${fileId}/components`),
        component: (key) => client.get(`components/${key}`),
        teamComponentSets: (teamId, params = {}) => client.get(`teams/${teamId}/component_sets`, { params }),
        fileComponentSets: (fileId) => client.get(`files/${fileId}/component_sets`),
        componentSet: (key) => client.get(`component_set/${key}`),
        teamStyles: (teamId, params = {}) => client.get(`teams/${teamId}/styles`, { params }),
        fileStyles: (fileId) => client.get(`files/${fileId}/styles`),
        style: (key) => client.get(`styles/${key}`),
    };
};
exports.Client = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwrQ0FBNkI7QUFDN0Isa0RBQTJEO0FBQzNELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBeVU5QyxNQUFNLE1BQU0sR0FBRyxDQUFDLElBQW1CLEVBQW1CLEVBQUU7SUFDN0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFDOUIsQ0FBQyxDQUFDO1lBQ0UsYUFBYSxFQUFFLFVBQVUsSUFBSSxDQUFDLFdBQVcsRUFBRTtTQUM1QztRQUNILENBQUMsQ0FBQztZQUNFLGVBQWUsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQzFDLENBQUM7SUFFTixJQUFJLE1BQU0sQ0FBQztJQUVYLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO1FBQzdCLE1BQU0sR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3BCLE9BQU8sRUFBRSxXQUFXLElBQUksQ0FBQyxPQUFPLElBQUksZUFBZSxNQUFNO1lBQ3pELE9BQU87WUFDUCxLQUFLLEVBQUUsS0FBSztZQUNaLFVBQVUsRUFBRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztTQUN6RCxDQUFDLENBQUM7S0FDSjtTQUFNO1FBQ0wsTUFBTSxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUM7WUFDcEIsT0FBTyxFQUFFLFdBQVcsSUFBSSxDQUFDLE9BQU8sSUFBSSxlQUFlLE1BQU07WUFDekQsT0FBTztTQUNSLENBQUMsQ0FBQztLQUNKO0lBRUQsT0FBTztRQUNMLE1BQU07UUFFTixJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxNQUFNLEVB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