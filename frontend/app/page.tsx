"use client";

// UI Components
import {PageHeader} from "../components/ui/PageHeader";
import {PageContainer} from "../components/ui/PageContainer";

// Scanner Components
import {FindingsTable} from "../components/scanner/FindingsTable";
import {MaskedContentCard} from "../components/scanner/MaskedContentCard";
import {CategoryBadges} from "../components/scanner/CategoryBadges";
import {RiskScoreCard} from "../components/scanner/RiskScoreCard";
import {DecisionCard} from "../components/scanner/DecisionCard";
import {ScannerInputCard} from "../components/scanner/ScannerInputCard";
import {ScanResults} from "../components/scanner/ScanResults";

// Scanner Services
import {scanContent} from "../services/scanner.service";

// Scanner Types
import {ScanResult} from "../types/scan-result";

// React Hooks
import {useState} from "react";

export default function Home() {
  const [content, setContent] = useState("");
  const [result, setResult] = useState<ScanResult | null>(null);

  async function handleScan(){
    try {
      const data = await scanContent(content);
      setResult(data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PageContainer>
      <PageHeader title="AI Compliance Scanner" description="Scan, classify and protect sensitive data." />
      <ScannerInputCard content={content} onChange={(e) => setContent(e.target.value)} onScan={handleScan} />
    {result && (
      <ScanResults result={result} />
    )}
    </PageContainer>
  )
}