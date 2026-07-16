"use client";

import {PageHeader} from "../components/ui/PageHeader";
import {PageContainer} from "../components/ui/PageContainer";
import {Button} from "../components/ui/Button";
import {FindingsTable} from "../components/scanner/FindingsTable";
import {MaskedContentCard} from "../components/scanner/MaskedContentCard";
import {CategoryBadges} from "../components/scanner/CategoryBadges";
import {RiskScoreCard} from "../components/scanner/RiskScoreCard";
import {DecisionCard} from "../components/scanner/DecisionCard";
import {scanContent} from "../services/scanner.service";
import {ScanResult} from "../types/scan-result";
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

      <textarea 
        className="h-48 w-full rounded border p-4"
        placeholder="Paste content here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        onClick={handleScan}  
      >
        Scan
      </Button>
    {result && (
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <DecisionCard decision={result.decision} />
        <RiskScoreCard score={result.risk_score} />
      </div>
    )}
    {result && (
      <div className="mt-4">
        <CategoryBadges categories={result.categories} />
      </div>
    )}
    {result && (
      <div className="mt-4">
        <MaskedContentCard content={result.masked_content} />
      </div>
    )}
    {result && (
      <div className="my-4">
        <FindingsTable findings={result.findings} />
      </div>
    )}
    </PageContainer>
  )
}