Notification.requestPermission(function () {
        if (Notification.permission == 'granted') {
            
        } else {
            console.log("La permission a été refusée ou non defini")
        }   
})

let notification = new Notification('Notification de Lorentz', {
    body: "Cliquez ici, vous avez reçu un message",
    icon : "ring.png"
})

notification.onclick = function () {
    window.open('notification.html', '_blank')
}