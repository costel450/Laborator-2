var video = document.getElementById("video");
video.addEventListener("touchstart",capteaza);
video.addEventListener("mousedown",capteaza);
//returnează elementul care are atributul ID cu valoarea specificată, adică id-ul video
//-----------------------------------------------
function on_cam_success(stream){//care va accesa camera și va transmite videoclipul către camera. Proprietatea srcObject 
    //a elementului media “video” setează sau returnează obiectul care servește ca sursă a suportului media asociat
video.srcObject = stream;
}
//-----------------------------------------------
function on_cam_error(err)
//pentru transmiterea unei erori in cazul in care nu putem accesa camera.
{
alert("error."+err.message);
}
//-----------------------------------------------
var constraints = { audio: false, video: true };
navigator.mediaDevices.getUserMedia(constraints)//solicită utilizatorului permisiunea de a utiliza un dispozitiv de intrare video și un 
//dispozitiv de intrare audio ca sursă pentru un MediaStream
//solicită utilizatorului permisiunea de a utiliza un dispozitiv de 
//intrare video și un dispozitiv de intrare audio ca sursă pentru un MediaStream
.then(on_cam_success)
.catch(on_cam_error);
//.then – metoda care returnează o promisiune
//- .catch - returnează o promisiune și tratează numai cazurile response
//-----------------------------------------------
function capteaza()
{
var c = document.getElementById("canvas");//returnează elementul care are atributul ID cu valoarea specificată, adică id-ul video
c.width = video.width;
c.height = video.height;
var ctx = c.getContext("2d");
ctx.drawImage(video, 0, 0, 640, 480);
}


//Creem funcția “capteaza()” care va fi apelata la acționarea butonului “Capteaza”. Creem variabila c care va returnă elementul a 
//cărui id se potrivește cu cel specificat. Creem variabila ctx, metoda getContext returnează un context de desen pe pânză sau nul 
//dacă identificatorul de context nu este acceptat sau pânza a fost deja setată la un mod context diferit. Parametrul metodei getContext 
//este „2d”, astfel se va crea un obiect CanvasRenderingContext2D reprezentând un context de redare bidimensional.
//DrawImage cu setarea elementului de desenat (video), punctul de afisare pornind prin setarea axei x și a axei y, 
//lățime și lungime.