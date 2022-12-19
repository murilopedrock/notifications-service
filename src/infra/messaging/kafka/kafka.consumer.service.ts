import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { ServerKafka } from '@nestjs/microservices'

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['obliging-flounder-11805-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'b2JsaWdpbmctZmxvdW5kZXItMTE4MDUk0-CkA0lUtqNkvQSV33863SORve9dBpg',
          password:
            'DpHC6F-ifAhnhbZ9_drgwdBe7NJFMRiaoTH7JbYpbgx95VFhTIhldDURvtZX543y98APiw==',
        },
        ssl: true,
      },
    })
  }

  async onModuleDestroy() {
    await this.close()
  }
}
