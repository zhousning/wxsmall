const gameUtils = require('./game-utils.js')

Page({
  data: {
    ParamA: '',
    ParamB: '',
    Operator: '',
    AnswerOptions: [],
    TrueAnswer: 0,
    CountDown: 0,
    Timer: null,
    time: gameUtils.config.countDownMax,
    AnswerStatus: 0
  },
  onLoad: function(options) {
    var that = this;
    gameUtils.prepareQuestion(that);
  },
  //redirectTo or navigatBack
  onUnload: function() {
    var that = this;
    gameUtils.cleanData(that);
  },
  onHide: function() {
    var that = this;
    gameUtils.cleanData(that);
  },
  onShow: function() {
    var that = this;
    gameUtils.startCountDown(that);
  },
  checkAnswer: function(e) {
    var that = this;
    var trueAnswer = e.currentTarget.dataset.trueAnswer;
    var answerOption = e.currentTarget.dataset.answerOption;
    if (trueAnswer == answerOption) {
      wx.showToast({
        title: '成功',
        icon: 'succes',
        duration: 1000,
        mask: true
      });
      gameUtils.prepareData(that);
    } else {
      this.setData({
        AnswerStatus: 2
      })
    }
  },
  getNextQuestion: function() {
    //gameUtils.prepareData(this);
  }
 

})