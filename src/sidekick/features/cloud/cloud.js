import React , {Component} from 'react';
import * as firebase from 'firebase';

class Cloud extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  uploadFile = (e) => {
    e.preventDefault();
    var file = this.refs.filePath.files[0];
    var storageRef = firebase.storage().ref();

     //dynamically set reference to the file name
     var thisRef = storageRef.child(file.name);
     console.log(thisRef.put(file));
     //put request upload file to firebase storage
     thisRef.put(file).then(function(snap){
       console.log(snap);
       console.log('done');
     });

  }







  render() {
    return (
      <div>
        <form onSubmit={this.uploadFile}>
          <progress value='0' max='100' ref='progressUpload'>0%</progress>
          <input type='file' ref='filePath' placeholder='FilePath' />
          <button>Upload</button>

        </form>


      </div>
    )
  }

}

export default Cloud;
