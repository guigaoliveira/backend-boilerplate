const amqp = require('amqplib')
const config = require('../services/rabbitmq-config')

const open = amqp.connect(config)

// Consumer
const consumer = async () => {
	try {
		const queueName = 'teste'

		const connection = await open
		const channel = await connection.createChannel()
		await channel.assertQueue(queueName, { durable: false })
		channel.consume(
			queueName,
			msg => msg !== null && console.log(msg.content.toString()),
			{ noAck: true }
		)
	} catch (e) {
		console.warn(e)
	}
}
consumer()
