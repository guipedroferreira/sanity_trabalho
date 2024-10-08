import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
        name: 'Nome',
        type: 'string',
      }),
      defineField({
          name: 'Sobrenome',
          type: 'string',
      }),
      defineField({
          name: 'Idade',
          type: 'number',
      }),
      defineField({
          name: 'DataDeNascimento',
          type: 'datetime',
      }),
      defineField({
        name: 'ReceberPromocoes',
        type: 'boolean',
      }),
  ],
})