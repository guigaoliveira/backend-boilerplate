const amqp = require('amqplib')
const config = require('../services/rabbitmq-config')

const open = amqp.connect(config)

// Publisher
const publisher = async () => {
	try {
		const exchangeName = 'management'
		const routerName = 'logs'
		const msg = 'something to do'

		const connection = await open
		const channel = await connection.createChannel()
		channel.assertExchange(exchangeName, 'direct', { durable: false })
		channel.publish(exchangeName, routerName, Buffer.from(msg))
		console.log(" [x] Sent %s: '%s'", routerName, msg)
	} catch (e) {
		console.warn(e)
	}
}
publisher()
