import React , {Component} from 'react';
import * as firebase from 'firebase';

class Cloud extends Component {

  constructor() {
    super();
    this.state = {
      files : {
        name: ''
      }
    };
  }




  componentWillMount () {
    const storage = firebase.storage().ref();



    storage.child('files/').getDownloadURL().then(function(url) {
      console.log('Storage url:',url);
    });

    //console.log('Storage : ',storage.getMetadata());

    this.setState({

    });
  }


  uploadFile = (e) => {
    let downloadURL = '';
    e.preventDefault();
    const file = this.refs.filePath;

    const storageRef = firebase.storage().ref('files/');


     let thisRef = storageRef.child(file.files[0].name);
     console.log(thisRef.put(file.files[0]));

     let uploadTask = thisRef.put(file.files[0])

     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,function(snap) {
       let progress = (snap.bytesTransferred / snap.totalBytes) * 100;
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
     },function() {

       console.log('url :', downloadURL);
       console.log('all done');
       console.log('fp:', file.value = '');
     })

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
