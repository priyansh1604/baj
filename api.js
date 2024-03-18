const axios = require('axios');
const apiUrl = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';
const fullName = 'priyansh';
const email = 'priyansh1076.be21@chitkara.edu.in';
const rollNumber = 2110991076; 
const phoneNumber = '7814959044'; 

const createInvestmentAccount = async () => {
  try {
    const response = await axios.post(apiUrl, {
      name: fullName,
      email,
      rollNumber,
      phone: phoneNumber,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Account created successfully:', response.data);
    
  } catch (error) {
    console.error('Error creating account:', error.message);
  }
};

createInvestmentAccount();
