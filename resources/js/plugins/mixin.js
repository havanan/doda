export const myMixin = {
    methods: {
        randomId(){
            return Math.random().toString(36).substring(7);
        },
    }
}