function RenameResponses() {
  var form = FormApp.openById("ID GOOGLE FORM"); //Copy_and_paste_your_FormId_here
  var formResponses = form.getResponses();
  var baseString = "https://drive.google.com/file/d/";
  var endString = "/view?usp=drivesdk";

  var folder = DriveApp.getFolderById("ID GOOGLE DRIVE FOLDER"); //Copy_and_paste_your_DriveId_here
  var files = folder.getFiles();

  while (files.hasNext()) {
    var file = files.next();
    for (var i = 0; i < formResponses.length; i++) {
      var formResponse = formResponses[i];
      var itemResponses = formResponse.getItemResponses();
      var itemResponseFirst = itemResponses[2];
      var itemResponseSecond = itemResponses[3];
      var itemResponseThird = itemResponses[1];
      var itemResponsePhoto = itemResponses[8];
      var photoID = itemResponsePhoto.getResponse();
      var newName =
        itemResponseFirst.getResponse() +
        " " +
        itemResponseSecond.getResponse() +
        " - " +
        itemResponseThird.getResponse();
      var url = baseString + photoID + endString;
      var urlCheck = file.getUrl();

      if (url == urlCheck) {
        var modName = newName + ".jpg";
        file.setName(modName);
      }
    }
  }
}
