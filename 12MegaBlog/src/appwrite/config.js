import conf from '../conf/conf.js'

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            const post = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId }
            );
            return post;
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            const post = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status}
            );
            return post;
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            const response = await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
            return response;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getPost(slug) {
        try {
            const post = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return post;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            const posts = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
            return posts;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
            return response;
        } catch (error) {
            throw error;
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            const response = await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            throw error;
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        );
    }
}


const service = new Service();

export default service;