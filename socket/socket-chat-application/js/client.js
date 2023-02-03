const socket=io('http://localhost:8000')


// get dom element in respective js variables
const form= document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer=document.querySelector(".container")
var audio= new Audio('./chating.mp3')
//audio that will play on receiving messages

const append = (message, position)=>{     ///function which will append  event info to the container
    const messageElement= document.createElement('div');
    messageElement.innerText= message;
    messageElement.classList.add('message')
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position == 'left'){
        audio.play()
    }
}


const name= prompt('enter your name to join');          //ask new user for the name and let the server knows
socket.emit('new-user-joined',name );

socket.on('user-joined', name =>{              ///let the user joins , receive his name  from the server
    append(`${name} joined the chat`, 'left')
})

socket.on('receive', data =>{                       // if server send a messages,receive it
    append(`${data.name}: ${data.message}`, 'left')

})


socket.on('left', name =>{                        ///if a user leaves the chat,append the info to the container
    append(`${name} left the chat`, 'left')

})


form.addEventListener('submit', (e)=>{           ///if the form get submitted,send the messages to the server
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send',message);
    messageInput.value =''
})
