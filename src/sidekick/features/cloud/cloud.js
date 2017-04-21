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
    var downloadURL = '';
    e.preventDefault();
    var file = this.refs.filePath.files[0];
    var storageRef = firebase.storage().ref();

     //dynamically set reference to the file name
     var thisRef = storageRef.child(file.name);
     console.log(thisRef.put(file));
     //put request upload file to firebase storage
     let uploadTask = thisRef.put(file)

     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,function(snap) {
       var progress = (snap.bytesTransferred / snap.totalBytes) * 100;
       console.log('Upload is :' + progress + '% done');
       switch(snap.state) {
         case firebase.storage.TaskState.PAUSED: // or 'paused'
         console.log('Upload is paused');
         break;
         case firebase.storage.TaskState.RUNNING: // or 'running'
         console.log('Upload is running');
         downloadURL = snap.downloadURL;
         console.log(snap.downloadURL);
         break;
       }


     },function(error){
       console.log('some error', error);
     }, function() {

       console.log('url :', downloadURL);

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
