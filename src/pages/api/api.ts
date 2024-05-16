/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
'use server'

import { connect } from '@/utils/api/connect'

const cleanPhoneNumber = (phoneNumber: string): any => {
  return phoneNumber.replace(/\D/g, '')
}

export default async function handler (req: { method: string, body: { nome: any, telefone: any, email: any, produto: any, duvida: any, origem: any, pagina: any, necessidade: any, valor_desejado: any, renda_mensal: any } }, res: { status: (arg0: number) => { (): any, new(): any, end: { (): any, new(): any }, json: { (arg0: { success: boolean, error?: string }): any, new(): any } } }): Promise<any> {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { nome, telefone, email, produto, duvida, origem, pagina, necessidade, valor_desejado, renda_mensal } = req.body

  const telefoneLimpo = cleanPhoneNumber(telefone)

  try {
    const connection = await connect()

    const query = 'INSERT INTO leads_auto (nome, telefone, email, produto, duvida, data, origem, pagina, necessidade, valor_desejado, renda_mensal) VALUES (?, ?, ?, ?, ?, NOW(), ?, ?, ?, ?, ?)'

    await connection.execute(query, [nome, telefoneLimpo, email, produto, duvida, origem, pagina, necessidade, valor_desejado, renda_mensal])

    connection.end()

    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Erro interno do servidor' })
  }
}
