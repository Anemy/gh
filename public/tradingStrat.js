module.exports = {
  'gekkoConfig': {
    'tradingAdvisor': {
      'enabled': true,
      'method': 'japonicus/ja354DEMARSI',
      'historySize': 10,
      'candleSize': 30
    },
    'japonicus/ja354DEMARSI': {
      'TSI': {
        'thresholds': {
          'up': 33.2,
          'down': -33.0
        },
        'short': 3.9,
        'long': 17.0,
        'active': 0.1
      },
      'PPO': {
        'thresholds': {
          'up': 0.18,
          'down': -0.45
        },
        'signal': 2.7,
        'short': 12.84,
        'long': 25.740000000000002,
        'active': 0.1
      },
      'DEMA': {
        'thresholds': {
          'up': 0.01,
          'down': -0.082
        },
        'short': 14.52,
        'long': 13.38,
        'active': 0.47000000000000003
      },
    'LRC': {
      'thresholds': {
        'up': 17.0,
        'down': -19.4
      },
      'depth': 11.25,
      'active': 0.1
    },

    'CCI': {
      'thresholds': {
        'up': 85.0,
        'persistence': 4.6,
        'down': -140.0
      },
      'history': 76.5,
      'consistant': 8.4,
      'active': 0.1
    },
    'persistence': 1.4,
    'SMMA': {
      'weight': 15.19,
    'thresholds': {
      'up': 0.01,
    'down': -0.09000000000000001
      },
    'active': 0.1
      },
    'RSI': {
      'thresholds': {
      'up': 56.4,
    'down': 27.0
      },
    'interval': 8.4,
    'active': 0.42}
      },

    'info': false,
    'paperTrader': {
      'feeUsing': 'maker',
      'reportRoundtrips': true,
      'fee': 0.25,
      'feeMaker': 0.15,
      'simulationBalance': {
        'asset': 1,
        'currency': 100
      },
      'enabled': true, 
      'slippage': 0.05, 
      'feeTaker': 0.25
    }, 
    'debug': false,
    'watch': {'exchange': 'bitfinex', 'asset': 'ETH', 'currency': 'USD'}, 
    'backtest': {'daterange': {'from': '2017-10-11 18:55:01', 'to': '2017-12-10 18:55:01'}}, 
    'performanceAnalyzer': {'riskFreeReturn': 2, 'enabled': true}, 'valid': true
  }, 
  'data': {'roundtrips': false, 'trades': true, 'candleProps': ['id', 'start', 'open', 'high', 'low', 'close', 'vwp', 'volume', 'trades'], 'report': true, 'indicatorResults': true}
}
