function make_album(artist, album,Tracking_no) {
    this.artist = artist;
    this.album = album;
    this.Tracking_no = Tracking_no;
    this.getDetails = function () {
        return this.artist + " Album is " + this.album + this.Tracking_no;
    }
}

var MakeAlbum = new make_album("Atif Aslam", "Doori ",102);
var MakeAlbum1 = new make_album("Eminem", "Not Afraid ",108);
var MakeAlbum2 = new make_album("Marhsmallow", "I've been quite for so long ",102);
console.log(MakeAlbum.getDetails());
console.log(MakeAlbum1.getDetails());
console.log(MakeAlbum2.getDetails());        

