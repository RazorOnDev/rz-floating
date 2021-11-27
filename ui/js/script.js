/* JS Code not made by me. */

var floating = new Vue({
    el: "#floating", 
    data: {  
        timeleft: 2000,   
        message: null 
    },
    methods: {
        replace(text) { 
            let Converted = ReplaceText(text)
            
            if(Converted){
                return Converted
            }
        }
    }
})

$(function(){
    window.addEventListener('message', function(event){
        if(event.data.message != null){
            let notification = [
                message = event.data.message, 
                time = event.data.time, 
                queue = 1  
            ]

            let repeated = false 

            for(i = 0; i < app.notifications.length; i++){  
                if(app.notifications[i][0] == event.data.message){
                    app.notifications[i][1] = event.data.time 
                    app.notifications[i][2] += 1  

                    repeated = true; 
                }
            }

            if(!repeated){
                app.notifications.push(notification)
            }
        }

        if(event.data.help != null){
            floating.message = event.data.help 
            HelpTimer(2000)
        }
    })
});

var waiting = false 

HelpTimer = (restore) => {
    if(restore != null){
        floating.timeleft = 2000
    }

    if(!waiting){
        waiting = true 
        setTimeout(function(){ 
            floating.timeleft -= 1000 
            waiting = false 
            HelpTimer()   
        }, 1000) 
    }
}

NotificationTimer = () => {
    if(app.notifications.length > 0){
        for(i = 0; i < app.notifications.length; i++){  
            if(app.notifications[i] != null){
                if(app.notifications[i][1] > 0){
                    app.notifications[i][1] -= 1000  
                } else {
                    app.notifications.splice(i, 1);
                }
            }
        }
    }

    setTimeout(function(){
        NotificationTimer()  
    }, 1000) 
}

ReplaceText = (text) => {
    text = text.replace("~r~", "<span class='red'>") 
    text = text.replace("~b~", "<span class='blue'>")
    text = text.replace("~g~", "<span class='green'>")
    text = text.replace("~y~", "<span class='yellow'>")
    text = text.replace("~p~", "<span class='purple'>")
    text = text.replace("~c~", "<span class='grey'>")
    text = text.replace("~m~", "<span class='darkgrey'>")
    text = text.replace("~u~", "<span class='black'>")
    text = text.replace("~o~", "<span class='gold'>")
    text = text.replace("~s~", "</span>")
    text = text.replace("~w~", "</span>")
    text = text.replace("~b~", "<b>")
    text = text.replace("~n~", "<br>")

    return text
}

NotificationTimer()