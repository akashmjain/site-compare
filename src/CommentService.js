import axios from 'axios';

const url = 'http://localhost:5000/api/comments';

class CommentService {
    // get Comments
    static getComments() {
        return new Promise( (resolve, reject) => {
            try {
                const res = axios.get(url);
                const data = res.data;
                resolve(
                    data.map(comment => ({
                        ...comment,
                        createdAt: new Date(comment.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        })
    }

    // create comments  
    static insertComments(data) {
        return axios.post(url, {
            product_key: data.product_key,
            comment: data.comment,
            product_rating: data.product_rating,
            user_name: data.user_name
        });
    }

    // delete comments
    static deleteComments(id) {
        return axios.delete(`${url}${id}`)

    }
}
export default CommentService;