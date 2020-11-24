module.exports = {
    age : (timestamp) => {
        const today = new Date();
        const birthDate = new Date(timestamp);

        let age = today.getFullYear() - birthDate.getFullYear();

        const month = today.getMonth() - birthDate.getMonth();

        if(month < 0 || (month == 0 && today.getDate() < birthDate.getDate())) {
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
        const date = new Date(timestamp);

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthday: `${day}/${month}`
        }     
    },
    grade : (year) => {
        if( year == '5MS' ) {
            year = '5th Year of Middle School'
        } else if ( year == '6MS' ) {
            year = '6th Year of Middle School'
        } else if ( year == '7MS' ) {
            year = '7th Year of Middle School'
        } else if ( year == '8MS' ) {
            year = '8th Year of Middle School'
        } else if ( year == '9MS' ) {
            year = '9th Year of Middle School'
        } else if ( year == '10HS' ) {
            year = '10th Year of High School'
        } else if ( year == '11HS' ) {
            year = '11th Year of High School'
        } else {
            year = '12th Year of High School'
        }
        return year
    }
};