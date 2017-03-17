module.exports = app => {

  // app.db.sequelize.sync().done(() => {

    app.listen(app.get('port'), () => {
      console.log(`Node API, listening on Port: ${app.get('port')}`);
    });

  // });

}