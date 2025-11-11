import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer'
import { CartItem } from '@/store/cartStore'

// Register fonts
Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
      fontWeight: 300,
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
      fontWeight: 500,
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
      fontWeight: 700,
    },
  ],
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Roboto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    paddingBottom: 20,
    borderBottom: '2 solid #3B82F6',
  },
  logo: {
    fontSize: 24,
    fontWeight: 700,
    color: '#3B82F6',
  },
  companyInfo: {
    textAlign: 'right',
    fontSize: 10,
    color: '#6B7280',
  },
  companySubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: '#1F2937',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 30,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: '#374151',
    marginBottom: 15,
    paddingBottom: 5,
    borderBottom: '1 solid #E5E7EB',
  },
  clientInfo: {
    backgroundColor: '#F9FAFB',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  clientRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  clientLabel: {
    fontSize: 10,
    fontWeight: 600,
    color: '#374151',
    width: 80,
  },
  clientValue: {
    fontSize: 10,
    color: '#6B7280',
    flex: 1,
  },
  tableCellDescription: {
    fontSize: 8,
    color: '#9CA3AF',
  },
  table: {
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: '#E5E7EB',
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#F3F4F6',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#E5E7EB',
  },
  tableColWide: {
    width: '40%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#E5E7EB',
  },
  tableColNarrow: {
    width: '15%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: '#E5E7EB',
  },
  tableCellHeader: {
    margin: 8,
    fontSize: 10,
    fontWeight: 600,
    color: '#374151',
  },
  tableCell: {
    margin: 8,
    fontSize: 9,
    color: '#6B7280',
  },
  tableCellBold: {
    margin: 8,
    fontSize: 10,
    fontWeight: 600,
    color: '#1F2937',
  },
  totalSection: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginBottom: 5,
  },
  totalLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  totalValue: {
    fontSize: 12,
    fontWeight: 600,
    color: '#1F2937',
  },
  grandTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    paddingTop: 10,
    borderTop: '2 solid #3B82F6',
    marginTop: 10,
  },
  grandTotalLabel: {
    fontSize: 14,
    fontWeight: 700,
    color: '#1F2937',
  },
  grandTotalValue: {
    fontSize: 14,
    fontWeight: 700,
    color: '#3B82F6',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#9CA3AF',
    borderTop: '1 solid #E5E7EB',
    paddingTop: 10,
  },
  terms: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
  },
  termsTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: '#374151',
    marginBottom: 10,
  },
  termsText: {
    fontSize: 9,
    color: '#6B7280',
    lineHeight: 1.4,
    marginBottom: 5,
  },
})

interface QuotePDFProps {
  items: CartItem[]
  clientInfo: {
    name: string
    email: string
    company?: string
    phone?: string
  }
  quoteNumber: string
  date: string
}

export const QuotePDF: React.FC<QuotePDFProps> = ({ items, clientInfo, quoteNumber, date }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.17 // 17% VAT in Israel
  const total = subtotal + tax

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>WEB YARDEN</Text>
            <Text style={styles.companySubtitle}>
              Agence Digitale Israël
            </Text>
          </View>
          <View style={styles.companyInfo}>
            <Text>Tel Aviv, Israël</Text>
            <Text>contact@webyarden.co.il</Text>
            <Text>+972 12 345 6789</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>DEVIS</Text>
        <Text style={styles.subtitle}>
          Devis N° {quoteNumber} • {date}
        </Text>

        {/* Client Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations Client</Text>
          <View style={styles.clientInfo}>
            <View style={styles.clientRow}>
              <Text style={styles.clientLabel}>Nom:</Text>
              <Text style={styles.clientValue}>{clientInfo.name}</Text>
            </View>
            <View style={styles.clientRow}>
              <Text style={styles.clientLabel}>Email:</Text>
              <Text style={styles.clientValue}>{clientInfo.email}</Text>
            </View>
            {clientInfo.company && (
              <View style={styles.clientRow}>
                <Text style={styles.clientLabel}>Entreprise:</Text>
                <Text style={styles.clientValue}>{clientInfo.company}</Text>
              </View>
            )}
            {clientInfo.phone && (
              <View style={styles.clientRow}>
                <Text style={styles.clientLabel}>Téléphone:</Text>
                <Text style={styles.clientValue}>{clientInfo.phone}</Text>
              </View>
            )}
          </View>
        </View>

        {/* Services Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services Demandés</Text>
          <View style={styles.table}>
            {/* Header */}
            <View style={[styles.tableRow, styles.tableHeader]}>
              <View style={styles.tableColWide}>
                <Text style={styles.tableCellHeader}>Service</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}>Délai</Text>
              </View>
              <View style={styles.tableColNarrow}>
                <Text style={styles.tableCellHeader}>Qté</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCellHeader}>Prix Unitaire</Text>
              </View>
              <View style={styles.tableColNarrow}>
                <Text style={styles.tableCellHeader}>Total</Text>
              </View>
            </View>

            {/* Items */}
            {items.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableColWide}>
                  <Text style={styles.tableCell}>{item.title}</Text>
                  <Text style={[styles.tableCell, styles.tableCellDescription]}>
                    {item.description}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.delivery}</Text>
                </View>
                <View style={styles.tableColNarrow}>
                  <Text style={styles.tableCell}>{item.quantity}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>₪ {item.price.toLocaleString()}</Text>
                </View>
                <View style={styles.tableColNarrow}>
                  <Text style={styles.tableCellBold}>
                    ₪ {(item.price * item.quantity).toLocaleString()}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Totals */}
        <View style={styles.totalSection}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Sous-total:</Text>
            <Text style={styles.totalValue}>₪ {subtotal.toLocaleString()}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>TVA (17%):</Text>
            <Text style={styles.totalValue}>₪ {tax.toLocaleString()}</Text>
          </View>
          <View style={styles.grandTotal}>
            <Text style={styles.grandTotalLabel}>TOTAL:</Text>
            <Text style={styles.grandTotalValue}>₪ {total.toLocaleString()}</Text>
          </View>
        </View>

        {/* Terms and Conditions */}
        <View style={styles.terms}>
          <Text style={styles.termsTitle}>Conditions Générales</Text>
          <Text style={styles.termsText}>
            • Ce devis est valable 30 jours à compter de la date d'émission.
          </Text>
          <Text style={styles.termsText}>
            • Un acompte de 50% sera demandé à la signature du contrat.
          </Text>
          <Text style={styles.termsText}>
            • Le solde sera payable à la livraison du projet.
          </Text>
          <Text style={styles.termsText}>
            • Délais de réalisation à partir de la réception de l'acompte et des éléments nécessaires.
          </Text>
          <Text style={styles.termsText}>
            • Maintenance et support technique inclus pendant 3 mois après livraison.
          </Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Web Yarden - Agence Digitale Israël • Tel Aviv • contact@webyarden.co.il • +972 12 345 6789
        </Text>
      </Page>
    </Document>
  )
}
