module.exports = {
    age : (timestamp) => {
        const today = new Date();

        const birthDate = new Date(timestamp);

        let age = today.getFullYear() - birthDate.getFullYear();

        const month = today.getMonth() - birthDate.getMonth();

        if(month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age -= 1
        }
        return age
    },
    graduation : (grade) => {

        if ( grade == 'HS') {
            grade = 'High School'
        } 
        else if ( grade == 'HE' ) {
            grade = 'Higher Education'
        } 
        else {
            grade = "Master's or Ph.D."
        }
        return grade                       
    },
    date: (timestamp) => {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return `${year}-${month}-${day}`
    }
};