'use strict';
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';
import { useState } from 'react';

// Register fonts (you would need to add actual font files)
Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2'
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Inter'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    borderBottom: 2,
    borderBottomColor: '#3A86FF',
    paddingBottom: 20
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A86FF'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 30
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
    backgroundColor: '#f3f4f6',
    padding: 8,
    borderRadius: 4
  },
  table: {
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row'
  },
  tableColHeader: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#f9fafb',
    padding: 8
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 8
  },
  tableCellHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#374151'
  },
  tableCell: {
    fontSize: 11,
    color: '#6b7280'
  },
  totalSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f9ff',
    borderRadius: 8
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  totalLabel: {
    fontSize: 12,
    color: '#374151'
  },
  totalValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937'
  },
  grandTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A86FF'
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 10,
    borderTop: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 10
  },
  contactInfo: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#f9fafb',
    borderRadius: 8
  },
  contactTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8
  },
  contactText: {
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 3
  }
});

interface QuoteItem {
  id: number;
  name: string;
  type: 'service' | 'pack';
  price: number;
  quantity: number;
}

interface PDFDocumentProps {
  clientInfo: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
}

const QuotePDFDocument = ({ clientInfo }: PDFDocumentProps) => {
  // Mock items for PDF generation
  const items: QuoteItem[] = [];
  const totalHT = 0;
  const tva = Math.round(totalHT * 0.17); // 17% VAT in Israel
  const totalTTC = totalHT + tva;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Web Yarden</Text>
          <View>
            <Text style={{ fontSize: 12, color: '#6b7280' }}>Devis N° WY-{Date.now()}</Text>
            <Text style={{ fontSize: 12, color: '#6b7280' }}>Date: {new Date().toLocaleDateString('fr-FR')}</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Devis Personnalisé</Text>
        <Text style={styles.subtitle}>
          Votre solution digitale sur mesure pour accélérer votre visibilité en Israël
        </Text>

        {/* Client Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations Client</Text>
          <Text style={styles.contactText}>Nom: {clientInfo.name}</Text>
          <Text style={styles.contactText}>Email: {clientInfo.email}</Text>
          <Text style={styles.contactText}>Téléphone: {clientInfo.phone}</Text>
          {clientInfo.company && <Text style={styles.contactText}>Entreprise: {clientInfo.company}</Text>}
        </View>

        {/* Services Table */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services Sélectionnés</Text>
          <View style={styles.table}>
            {/* Header */}
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Service</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Options</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Qté</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Prix Total</Text>
              </View>
            </View>
            
            {/* Rows */}
            {items.map((item: QuoteItem, index: number) => (
              <View style={styles.tableRow} key={index}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.name}</Text>
                  <Text style={[styles.tableCell, { fontSize: 9, color: '#9ca3af' }]}>
                    {item.type === 'service' ? 'Service' : 'Pack'}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    Standard
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.quantity}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{(item.price * item.quantity).toLocaleString()}₪</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Totals */}
        <View style={styles.totalSection}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Sous-total HT:</Text>
            <Text style={styles.totalValue}>{totalHT}₪</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>TVA (17%):</Text>
            <Text style={styles.totalValue}>{tva}₪</Text>
          </View>
          <View style={[styles.totalRow, { borderTop: 1, borderTopColor: '#d1d5db', paddingTop: 8, marginTop: 8 }]}>
            <Text style={styles.grandTotal}>Total TTC:</Text>
            <Text style={styles.grandTotal}>{totalTTC}₪</Text>
          </View>
        </View>

        {/* Contact Info */}
        <View style={styles.contactInfo}>
          <Text style={styles.contactTitle}>Prochaines Étapes</Text>
          <Text style={styles.contactText}>
            • Validez ce devis en nous contactant via WhatsApp: +972 50 123 4567
          </Text>
          <Text style={styles.contactText}>
            • Ou répondez par email à: contact@webyarden.co.il
          </Text>
          <Text style={styles.contactText}>
            • Délai de validité: 30 jours à compter de la date d'émission
          </Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Web Yarden - Agence Digitale | Tel Aviv, Israël | contact@webyarden.co.il | +972 50 123 4567
        </Text>
      </Page>
    </Document>
  );
};

interface PDFGeneratorProps {
  items: QuoteItem[];
  clientInfo: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
}

const PDFGenerator = ({ items, clientInfo }: PDFGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  if (items.length === 0) {
    return (
      <button disabled className="btn-primary opacity-50 cursor-not-allowed">
        📄 Ajoutez des services pour générer le PDF
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<QuotePDFDocument clientInfo={clientInfo} />}
      fileName={`devis-web-yarden-${Date.now()}.pdf`}
      className="btn-primary w-full text-center"
    >
      📄 Télécharger mon devis PDF
    </PDFDownloadLink>
  );
};

export default PDFGenerator;
