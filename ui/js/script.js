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

        if(event.data.floating != null){
            floating.message = event.data.floating 
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