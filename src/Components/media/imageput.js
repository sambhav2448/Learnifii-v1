import React from 'react';
import ImageUploader from 'react-images-upload';
import "./imageput.css"
 
class Mediaput extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        
        console.log(this.state.pictures)

    }
 
    render() {
        return (
            <ImageUploader
                singleImage="True"
                withPreview="True"
                fileSizeError="File is too big"
                fileTypeError=" is not supported file extension"
                accept="image"
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.svg', '.png', '.jpeg']}
                maxFileSize={5242880}
                label="Upload Teacher Image"
                buttonText="Choose Image"
            />
        );
    }
}

export default Mediaput