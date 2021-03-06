// import '@babel/polyfill';
import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// Function That will return a promise object when resolved
export const getImageUrl = async (file) => {
    try {
        const formData = new FormData();
        formData.append('upload_preset', 'qmnnrrnhhaven');
        formData.append('file', file);
        const result = await axios.post('https://api.cloudinary.com/v1_1/dchunophk/image/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            // onUploadProgress: (progressEvent) => {
            //     Math.round((progressEvent.loaded * 100) / progressEvent.total);
            // },
        });
        return {
            default: result.data.url,
        };
    } catch (error) {
        return error;
    }
};

class MyUploadAdapter {
    constructor(loader) {
        // The file loader instance to use during the upload which is created by the ImageUploadPlugin
        this.loader = loader;
    }

    // Starts the upload process.
    upload() {
        // Return a promise with the image object
        return this.loader.file
            .then((file) => getImageUrl(file));
    }
}

const MyCustomUploadAdapterPlugin = (editor) => {
    // FileRepository enables the UploadAdpator and glues it to the editor
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => new MyUploadAdapter(loader);
};

const editorConfigs = {
    toolbar: ['bold', 'italic', 'link', 'blockQuote', 'imageUpload'],
    blockToolbar: ['heading', 'blockQuote', 'imageUpload'],
    removePlugins: ['List', 'Table', 'TableToolbar', 'MediaEmbed'],
    extraPlugins: [MyCustomUploadAdapterPlugin],
};

export default editorConfigs;