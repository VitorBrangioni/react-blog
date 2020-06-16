import posts from "./mocks-data/posts";
export const mockGetPosts = jest.fn(() => posts);

const mock = jest.fn().mockImplementation(() => {
    return {
        getPosts: mockGetPosts
    };
});

export default mock;