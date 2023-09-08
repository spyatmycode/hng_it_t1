

const dateContainer = document.getElementById("date")
const dayOfTheWeekContainer = document.getElementById("dayOfTheWeek")
const gitHubButton = document.querySelector("button")


gitHubButton.addEventListener("click",()=>{
    window.location.href = "https://github.com/spyatmycode"
})


const daysOfTheWeekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]



const getDate = ()=>{


    const day = new Date().getDay()

    const utcTimeInMilliseconds = new Date().getTime()


    return {
        dayOfTheWeek: daysOfTheWeekArray[day],
        time: utcTimeInMilliseconds
    }

    
}

setInterval(()=>{


    dateContainer.textContent = getDate().time;
    dayOfTheWeekContainer.textContent = getDate().dayOfTheWeek

    

},1000)



getDate()