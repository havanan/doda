export const myMixin = {
    methods: {
        randomId(){
            return Math.random().toString(36).substring(7);
        },
         decodeEntities(encodedString) {
            let textArea = document.createElement('textarea');
            textArea.innerHTML = encodedString;
            return textArea.value;
        }
    }
}