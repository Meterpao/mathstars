function getPage(request, response){
    // do any work you need to do, then
    response.render('game1', {title: 'Game 1'});
  }
  
  module.exports = {
    getPage
  };