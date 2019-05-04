const amqp = require('amqplib')
const config = require('../services/rabbitmq-config')

const open = amqp.connect(config)

// Publisher
const publisher = async () => {
	try {
		const queueName = 'teste'
		const msg = 'something to do'

		const connection = await open
		const channel = await connection.createChannel()
		await channel.assertQueue(queueName, { durable: false })
		await channel.sendToQueue(queueName, Buffer.from(msg))
	} catch (e) {
		console.warn(e)
	}
}
publisher()
