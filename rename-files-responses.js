function RenameResponses() {
  var form = FormApp.openById("ID GOOGLE FORM"); //Copy_and_paste_your_FormId_here
  var formResponses = form.getResponses();
  var baseString = "https://drive.google.com/file/d/";
  var endString = "/view?usp=drivesdk";

  var folder = DriveApp.getFolderById("ID GOOGLE DRIVE FOLDER"); //Copy_and_paste_your_DriveId_here
  var files = folder.getFiles();

  while (files.hasNext()) {
    let file = files.next();
    for (var i = 0; i < formResponses.length; i++) {
      let formResponse = formResponses[i];
      let itemResponses = formResponse.getItemResponses();
      let itemResponseFirst = itemResponses[2];
      let itemResponseSecond = itemResponses[3];
      let itemResponseThird = itemResponses[1];
      let itemResponsePhoto = itemResponses[8];
      let photoID = itemResponsePhoto.getResponse();
      let newName =
        itemResponseFirst.getResponse() +
        " " +
        itemResponseSecond.getResponse() +
        " - " +
        itemResponseThird.getResponse();
      let url = baseString + photoID + endString;
      let urlCheck = file.getUrl();

      if (url == urlCheck) {
        var modName = newName + ".jpg";
        file.setName(modName);
      }
    }
  }
}
