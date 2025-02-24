import { generateInputParams, GeneratePriceOptions, generateTransport } from '@chainlink/tp-adapter'
import { PriceEndpoint } from '@chainlink/external-adapter-framework/adapter'

const options: GeneratePriceOptions = {
  sourceName: 'icapSource',
  streamName: 'IC',
  sourceOptions: ['BGK', 'GBL', 'HKG', 'JHB'],
}

const inputParameters = generateInputParams(options)
const transport = generateTransport(options)

export const priceEndpoint = new PriceEndpoint({
  name: 'price',
  aliases: ['forex'],
  transport,
  inputParameters,
})
