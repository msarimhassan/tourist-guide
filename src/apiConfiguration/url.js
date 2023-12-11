const Url = {
  // Auth
  customerSignup: 'customers/signup',
  customerLogin: 'customers/signin',

  companySignup: 'companies/signup',
  companyLogin: 'companies/signin',

  hotelLogin: 'hotels/signin',

  // tour crud
  createTour: 'tours/create',
  getCompanyTours: 'tours/list',
  deleteTour: (id) => `tours/delete/${id}`,
  getSingleTour: (id) => `tours/get/${id}`,
  updateTour: (id) => `tours/update/${id}`,

  // userPanel
  getCompanies: 'companies/list',
  getTourByCompanyId: (companyId) => `tours/get-tour-by-company-id/${companyId}`,
  getTourByTourId: (tourId) => `tours/get-tour-by-id/${tourId}`,
};

export default Url;
