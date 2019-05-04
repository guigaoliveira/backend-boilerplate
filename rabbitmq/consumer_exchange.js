const amqp = require('amqplib')
const config = require('../services/rabbitmq-config')

const open = amqp.connect(config)

// Consumer
const consumer = async () => {
	try {
		const queueName = 'criarLogs'
		const exchangeName = 'management'
		const routerName = 'logs'

		const connection = await open
		const channel = await connection.createChannel()
		channel.assertExchange(exchangeName, 'direct', { durable: false })
		const q = await channel.assertQueue(queueName, { exclusive: true })
		console.log(' [*] Waiting for logs. To exit press CTRL+C')
		channel.bindQueue(q.queue, exchangeName, routerName)
		channel.consume(
			q.queue,
			msg =>
				msg !== null &&
				console.log(
					" [x] router '%s', message received: '%s'",
					msg.fields.routingKey,
					msg.content.toString()
				),
			{ noAck: true }
		)
	} catch (e) {
		console.warn(e)
	}
}
consumer()

/* se queueName = '' então é gerado um nome pra fila random 
            algo como amq.gen-SYJHLnWTLpTJPSWm8LKuwA */
