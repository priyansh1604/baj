const buyStocksApiUrl = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';
const companyToInvestIn = 'Bajaj Finserv LTD'; 
const currentStockPrice = '1,578.55'; 
const investmentAccountNumber = 'ABC123'; 
const githubRepoLink = 'https://github.com/priyansh1604/baj.git'; 

const buyStocks = async () => {
  try {
    const response = await axios.post(buyStocksApiUrl, {
      company: companyToInvestIn,
      currentPrice: currentStockPrice,
      accountNumber: investmentAccountNumber,
      githubRepoLink,
    }, {
      headers: {
        'content-type': 'application/json',
        'bfhl-auth': '2110991076', 
      },
    });

    console.log('Stocks bought successfully:', response.data)
  } catch (error) {
    console.error('Error buying stocks:', error.message);
  }
};

buyStocks();
