document.getElementById('loan-form').addEventListener('submit', function(e){

    document.getElementById('results').style.display = 'none'
    
    document.getElementById('loading').style.display = 'block'

    

    setTimeout(calculateResults, 2000)

    e.preventDefault()
})

//create the function
function calculateResults(){
    console.log('This works')
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')

    const principal = parseFloat(amount.value)
    const calculatedInterest = parseFloat(interest.value) /100 / 12
    const calculatedPayments = parseFloat(years.value) * 12

    const x = Math.pow(1 + calculatedInterest, calculatedPayments)
    const monthly = (principal * x * calculatedInterest) / (x - 1)

    //show results
    document.getElementById('results').style.display = 'block'

    //hide loader
    document.getElementById('loading').style.display = 'none'

    //to check if the value you are getting from users input is a number
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
    }else{
        
        showError('Please check your numbers')
    }


    

    
}

//creating the showError function
function showError(error){
    //create an element
    const errorDiv = document.createElement('div')

    //positioning the error message
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')


    //add a class to the already created element
    errorDiv.className = 'alert alert-danger'

    //add text to created div
    errorDiv.appendChild(document.createTextNode(error))
   
    card.insertBefore(errorDiv, heading)

    setTimeout(clearError, 3000)

}

function clearError(){
    document.querySelector('.alert').remove()
}
