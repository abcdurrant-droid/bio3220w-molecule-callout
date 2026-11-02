const CLUES = [
  {
    "id": "m01",
    "topic": "Membranes & transport",
    "answer": "Cholesterol",
    "clue": "I fit my rigid steroid rings between phospholipid tails in animal membranes. I restrain tail motion at higher temperatures and hinder tight packing at lower temperatures.",
    "note": "I buffer membrane fluidity; my hydroxyl group sits near the polar head groups.",
    "source": {
      "deck": "[1] The Lipid Bilayer.pptx",
      "slide": 23
    }
  },
  {
    "id": "m02",
    "topic": "Membranes & transport",
    "answer": "Phosphatidylserine (PS)",
    "clue": "I am a negatively charged glycerophospholipid with a serine head group. Usually enriched on the cytosolic leaflet, I become an engulfment signal when exposed on apoptotic cells.",
    "note": "Externalized PS helps phagocytes recognize apoptotic cells.",
    "source": {
      "deck": "[1] The Lipid Bilayer.pptx",
      "slide": 32
    }
  },
  {
    "id": "m03",
    "topic": "Membranes & transport",
    "answer": "Phosphatidylcholine (PC)",
    "clue": "I am a glycerophospholipid with a choline head group and two fatty acyl chains. I am abundant in animal membranes and commonly enriched in the outer plasma-membrane leaflet.",
    "note": "The glycerol backbone distinguishes PC from the choline-containing sphingomyelin.",
    "source": {
      "deck": "[1] The Lipid Bilayer.pptx",
      "slide": 12
    }
  },
  {
    "id": "m04",
    "topic": "Membranes & transport",
    "answer": "Sphingomyelin",
    "clue": "I have a ceramide backbone and a phosphocholine head group. I am abundant in the outer leaflet of animal plasma membranes and in myelin.",
    "note": "Unlike PC, I am a sphingolipid built on sphingosine.",
    "source": {
      "deck": "[1] The Lipid Bilayer.pptx",
      "slide": 26
    }
  },
  {
    "id": "m05",
    "topic": "Membranes & transport",
    "answer": "Phosphatidylethanolamine (PE)",
    "clue": "I am a glycerophospholipid with an ethanolamine head group. My relatively small head favors membrane curvature, and I am enriched in the cytosolic plasma-membrane leaflet.",
    "note": "Accept PE. The head group distinguishes me from PC, PS, and PI.",
    "source": {
      "deck": "[1] The Lipid Bilayer.pptx",
      "slide": 12
    }
  },
  {
    "id": "m06",
    "topic": "Membranes & transport",
    "answer": "P4-ATPase flippase",
    "clue": "I use ATP to move selected aminophospholipids, such as PS, from the noncytosolic leaflet toward the cytosolic leaflet of the plasma membrane.",
    "note": "This directional transport helps maintain lipid asymmetry. Accept aminophospholipid flippase.",
    "source": {
      "deck": "[2] Lipid Synthesis.pptx",
      "slide": 15
    }
  },
  {
    "id": "m07",
    "topic": "Membranes & transport",
    "answer": "Phospholipid scramblase",
    "clue": "I facilitate bidirectional movement of phospholipids between leaflets without directly using ATP. When activated, I can dissipate plasma-membrane lipid asymmetry.",
    "note": "Scrambling differs from the directional, ATP-driven action of a P4-ATPase flippase.",
    "source": {
      "deck": "[2] Lipid Synthesis.pptx",
      "slide": 15
    }
  },
  {
    "id": "m08",
    "topic": "Membranes & transport",
    "answer": "Aquaporin",
    "clue": "I form a selective channel that greatly speeds passive water movement across a membrane while excluding protons from my water pore.",
    "note": "Water follows its osmotic gradient; I do not pump it using ATP.",
    "source": {
      "deck": "[3] Transmembrane Transport.pptx",
      "slide": 23
    }
  },
  {
    "id": "m09",
    "topic": "Membranes & transport",
    "answer": "Na⁺/K⁺-ATPase",
    "clue": "For each ATP I hydrolyze, I pump three sodium ions out of an animal cell and two potassium ions in.",
    "note": "I am a primary active, electrogenic P-type pump.",
    "source": {
      "deck": "[4] ATP-Powered Pumps.pptx",
      "slide": 25
    }
  },
  {
    "id": "m10",
    "topic": "Membranes & transport",
    "answer": "SERCA (ER/SR Ca²⁺-ATPase)",
    "clue": "I use ATP to pump cytosolic calcium into the endoplasmic or sarcoplasmic reticulum, helping restore low cytosolic calcium after a signal.",
    "note": "I refill ER/SR calcium stores; a plasma-membrane calcium pump exports calcium from the cell instead.",
    "source": {
      "deck": "[4] ATP-Powered Pumps.pptx",
      "slide": 6
    }
  },
  {
    "id": "m11",
    "topic": "Membranes & transport",
    "answer": "V-type H⁺-ATPase",
    "clue": "I hydrolyze ATP to pump protons into endosomes and lysosomes, acidifying their lumens.",
    "note": "I am a rotary proton pump; acidic lumens support cargo sorting and degradation.",
    "source": {
      "deck": "[4] Endocytic Pathway.pptx",
      "slide": 3
    }
  },
  {
    "id": "m12",
    "topic": "Membranes & transport",
    "answer": "GLUT1",
    "clue": "I am the widely expressed basal glucose uniporter abundant in erythrocytes and the blood–brain barrier. I move glucose down its concentration gradient without coupling it to sodium.",
    "note": "Accept glucose transporter 1. I mediate facilitated diffusion, not sodium-driven uptake.",
    "source": {
      "deck": "[3] Transmembrane Transport.pptx",
      "slide": 19
    }
  },
  {
    "id": "m13",
    "topic": "Membranes & transport",
    "answer": "GLUT4",
    "clue": "In skeletal muscle and adipose cells, insulin recruits me from intracellular vesicles to the plasma membrane, increasing the capacity for facilitated glucose uptake.",
    "note": "Accept glucose transporter 4. More transporters at the surface increases transport Vmax.",
    "source": {
      "deck": "[3] Transmembrane Transport.pptx",
      "slide": 20
    }
  },
  {
    "id": "m14",
    "topic": "Membranes & transport",
    "answer": "GLUT5",
    "clue": "I am the GLUT-family uniporter specialized primarily for fructose rather than glucose. I facilitate sugar movement without directly using ATP.",
    "note": "Accept glucose transporter 5. Substrate specificity distinguishes me from the other GLUTs in this module.",
    "source": {
      "deck": "[3] Transmembrane Transport.pptx",
      "slide": 19
    }
  },
  {
    "id": "m15",
    "topic": "Membranes & transport",
    "answer": "Aquaporin-2 (AQP2)",
    "clue": "Vasopressin increases my insertion into the apical plasma membrane of kidney collecting-duct principal cells, increasing water permeability and reabsorption.",
    "note": "Accept AQP2. This regulation changes channel number; water still moves passively.",
    "source": {
      "deck": "[3] Transmembrane Transport.pptx",
      "slide": 24
    }
  },
  {
    "id": "m16",
    "topic": "Membranes & transport",
    "answer": "F-type ATP synthase",
    "clue": "In the inner mitochondrial membrane, I couple proton movement down its electrochemical gradient to the synthesis of ATP from ADP and inorganic phosphate.",
    "note": "Accept F-class ATPase or F₀F₁ ATP synthase. My usual physiological role makes ATP rather than spending it to acidify an organelle.",
    "source": {
      "deck": "[4] ATP-Powered Pumps.pptx",
      "slide": 7
    }
  },
  {
    "id": "m17",
    "topic": "Membranes & transport",
    "answer": "Gastric H⁺/K⁺-ATPase",
    "clue": "In gastric parietal cells, I spend ATP to secrete protons into the stomach in exchange for potassium. My transport cycle includes a phosphorylated intermediate.",
    "note": "Accept gastric proton pump. I am a P-class pump, distinct from V-type proton pumps.",
    "source": {
      "deck": "[4] ATP-Powered Pumps.pptx",
      "slide": 17
    }
  },
  {
    "id": "m18",
    "topic": "Membranes & transport",
    "answer": "CFTR",
    "clue": "I am an ABC-family epithelial anion channel regulated by phosphorylation and ATP-dependent gating. Defects in me cause cystic fibrosis.",
    "note": "Accept cystic fibrosis transmembrane conductance regulator. I conduct chloride and bicarbonate rather than functioning as a conventional ABC pump.",
    "source": {
      "deck": "[3] Secretory Pathway Early Stages.pptx",
      "slide": 18
    }
  },
  {
    "id": "m19",
    "topic": "Membranes & transport",
    "answer": "P-glycoprotein (ABCB1)",
    "clue": "I am an ATP-driven plasma-membrane efflux transporter also called MDR1. I can expel many hydrophobic drugs and contribute to multidrug resistance.",
    "note": "Accept ABCB1 or MDR1. I am an ABC transporter, unlike the ABC-family channel CFTR.",
    "source": {
      "deck": "[4] ATP-Powered Pumps.pptx",
      "slide": 21
    }
  },
  {
    "id": "m20",
    "topic": "Membranes & transport",
    "answer": "Acetyl-CoA carboxylase (ACC)",
    "clue": "I use ATP to add a carboxyl group to acetyl-CoA, producing malonyl-CoA at a major regulated step in fatty-acid synthesis.",
    "note": "Accept ACC. Fatty acid synthase uses malonyl-derived two-carbon units later in the pathway.",
    "source": {
      "deck": "[2] Lipid Synthesis.pptx",
      "slide": 7
    }
  },
  {
    "id": "m21",
    "topic": "Protein trafficking",
    "answer": "Signal recognition particle (SRP)",
    "clue": "I am a ribonucleoprotein that binds an emerging ER signal sequence and its ribosome, slows translation transiently, and targets the complex to the ER.",
    "note": "Accept SRP. My RNA and protein components recognize the nascent chain before ER docking.",
    "source": {
      "deck": "[2] ER Targeting.pptx",
      "slide": 10
    }
  },
  {
    "id": "m22",
    "topic": "Protein trafficking",
    "answer": "SRP receptor",
    "clue": "I am the ER-membrane docking partner for the signal recognition particle. GTP-dependent interactions help deliver its ribosome–nascent-chain complex to the translocon.",
    "note": "I receive SRP at the ER; I am not the protein-conducting channel.",
    "source": {
      "deck": "[2] ER Targeting.pptx",
      "slide": 13
    }
  },
  {
    "id": "m23",
    "topic": "Protein trafficking",
    "answer": "Sec61 translocon",
    "clue": "I form the ER protein-conducting channel through which many nascent secretory proteins enter the lumen. My lateral gate allows hydrophobic segments to enter the bilayer.",
    "note": "Accept Sec61 complex. I support both translocation and membrane-protein insertion.",
    "source": {
      "deck": "[2] ER Targeting.pptx",
      "slide": 11
    }
  },
  {
    "id": "m24",
    "topic": "Protein trafficking",
    "answer": "ER signal peptidase",
    "clue": "I cleave a removable N-terminal ER signal peptide from many proteins as they enter the ER lumen.",
    "note": "Not every ER targeting sequence is cleaved: internal signal anchors can remain in membrane proteins.",
    "source": {
      "deck": "[2] ER Targeting.pptx",
      "slide": 14
    }
  },
  {
    "id": "m25",
    "topic": "Membranes & transport",
    "answer": "Fatty acid synthase (FAS)",
    "clue": "I build a fatty-acid chain by repeated two-carbon additions, using NADPH as reducing power and typically releasing a 16-carbon product.",
    "note": "Accept FAS. The usual product in animal cells is palmitate.",
    "source": {
      "deck": "[2] Lipid Synthesis.pptx",
      "slide": 8
    }
  },
  {
    "id": "m26",
    "topic": "Membranes & transport",
    "answer": "Serine palmitoyltransferase (SPT)",
    "clue": "At the ER, I condense serine with palmitoyl-CoA to initiate de novo sphingolipid synthesis.",
    "note": "Accept SPT. This is the first committed step toward the sphingoid backbone.",
    "source": {
      "deck": "[2] Lipid Synthesis.pptx",
      "slide": 16
    }
  },
  {
    "id": "m27",
    "topic": "Membranes & transport",
    "answer": "HMG-CoA reductase",
    "clue": "I am the ER-associated enzyme that converts HMG-CoA to mevalonate at a major regulatory step in cholesterol synthesis. Statins inhibit me.",
    "note": "Accept 3-hydroxy-3-methylglutaryl-CoA reductase.",
    "source": {
      "deck": "[2] Lipid Synthesis.pptx",
      "slide": 19
    }
  },
  {
    "id": "m28",
    "topic": "Membranes & transport",
    "answer": "Ceramide",
    "clue": "I am the ER-produced central sphingolipid precursor consisting of a sphingosine backbone with an amide-linked fatty acid. In the Golgi, I can be modified to make sphingomyelin or glycosphingolipids.",
    "note": "Accept ceramide. Adding different polar groups creates different sphingolipids.",
    "source": {
      "deck": "[2] Lipid Synthesis.pptx",
      "slide": 17
    }
  },
  {
    "id": "m29",
    "topic": "Protein trafficking",
    "answer": "COPII coat",
    "clue": "I assemble at ER exit sites to package cargo for transport toward the Golgi. My recruitment is initiated by Sar1-GTP.",
    "note": "Accept COPII. Contrast COPI-mediated retrieval toward the ER.",
    "source": {
      "deck": "[3] Secretory Pathway Early Stages.pptx",
      "slide": 10
    }
  },
  {
    "id": "m30",
    "topic": "Protein trafficking",
    "answer": "Sar1",
    "clue": "I am the small GTPase whose GTP-bound form exposes an amphipathic helix that inserts into the ER membrane and initiates COPII coat assembly.",
    "note": "Accept Sar1 GTPase. Do not confuse me with ARF1, which recruits COPI.",
    "source": {
      "deck": "[3] Secretory Pathway Early Stages.pptx",
      "slide": 10
    }
  },
  {
    "id": "m31",
    "topic": "Protein trafficking",
    "answer": "COPI coat",
    "clue": "I am the coatomer-based coat recruited by ARF1. I support Golgi-to-ER retrieval and transport within the Golgi.",
    "note": "Accept COPI or coatomer. ER export toward the Golgi uses COPII.",
    "source": {
      "deck": "[3] Secretory Pathway Early Stages.pptx",
      "slide": 15
    }
  },
  {
    "id": "m32",
    "topic": "Protein trafficking",
    "answer": "ARF1",
    "clue": "I am the small GTPase that recruits coatomer to Golgi membranes when GTP-bound, initiating COPI coat assembly.",
    "note": "Accept ADP-ribosylation factor 1. Sar1 instead initiates COPII assembly at the ER.",
    "source": {
      "deck": "[3] Secretory Pathway Early Stages.pptx",
      "slide": 15
    }
  },
  {
    "id": "m33",
    "topic": "Protein trafficking",
    "answer": "Clathrin",
    "clue": "My three-legged triskelions assemble into a lattice around budding carriers in receptor-mediated endocytosis and some trans-Golgi traffic.",
    "note": "Adaptors connect my lattice to membranes and cargo.",
    "source": {
      "deck": "[4] Endocytic Pathway.pptx",
      "slide": 10
    }
  },
  {
    "id": "m34",
    "topic": "Protein trafficking",
    "answer": "Clathrin adaptor proteins",
    "clue": "During clathrin-mediated endocytosis, we recognize cytosolic sorting signals on cargo receptors and connect the selected cargo to the assembling clathrin coat.",
    "note": "Accept clathrin adaptors or AP2 adaptor complex for plasma-membrane endocytosis. Clathrin supplies the outer lattice.",
    "source": {
      "deck": "[4] Endocytic Pathway.pptx",
      "slide": 10
    }
  },
  {
    "id": "m35",
    "topic": "Protein trafficking",
    "answer": "Dynamin",
    "clue": "I am a large GTPase that assembles around the neck of a clathrin-coated endocytic bud and helps sever it from the plasma membrane.",
    "note": "GTP-dependent neck constriction and scission distinguish me from the clathrin coat.",
    "source": {
      "deck": "[4] Endocytic Pathway.pptx",
      "slide": 10
    }
  },
  {
    "id": "m36",
    "topic": "Protein trafficking",
    "answer": "Rab GTPase",
    "clue": "In my GTP-bound state, I recruit effectors such as tethering proteins that help specify where a transport carrier docks.",
    "note": "Accept Rab family protein. SNAREs drive membrane fusion after recognition and tethering.",
    "source": {
      "deck": "[3] Secretory Pathway Early Stages.pptx",
      "slide": 11
    }
  },
  {
    "id": "m37",
    "topic": "Protein trafficking",
    "answer": "SNARE proteins",
    "clue": "We zipper together from opposing membranes into a tight complex, drawing the bilayers close enough to drive fusion.",
    "note": "Accept SNARE complex or v-SNARE/t-SNARE pair. After fusion, NSF helps disassemble the cis-SNARE complex.",
    "source": {
      "deck": "[3] Secretory Pathway Early Stages.pptx",
      "slide": 11
    }
  },
  {
    "id": "m38",
    "topic": "Protein trafficking",
    "answer": "Sec12",
    "clue": "I am the ER-membrane guanine nucleotide exchange factor that activates Sar1 by promoting replacement of GDP with GTP, beginning COPII coat recruitment.",
    "note": "Accept Sec12. A GEF promotes nucleotide exchange; it does not convert GDP directly to GTP.",
    "source": {
      "deck": "[3] Secretory Pathway Early Stages.pptx",
      "slide": 10
    }
  },
  {
    "id": "m39",
    "topic": "Protein trafficking",
    "answer": "LDL receptor",
    "clue": "At the plasma membrane, I bind LDL particles and enter clathrin-coated pits with them. Endosomal acidification releases my ligand so I can recycle to the surface.",
    "note": "Accept LDLR. LDL continues toward lysosomal degradation and cholesterol release.",
    "source": {
      "deck": "[4] Endocytic Pathway.pptx",
      "slide": 13
    }
  },
  {
    "id": "m40",
    "topic": "Protein trafficking",
    "answer": "KDEL receptor",
    "clue": "In the Golgi, I recognize the C-terminal Lys-Asp-Glu-Leu retrieval signal on escaped soluble ER residents and help send them back in COPI carriers.",
    "note": "KDEL is the cargo signal; I am its receptor. Binding is favored in the more acidic Golgi.",
    "source": {
      "deck": "[3] Secretory Pathway Early Stages.pptx",
      "slide": 16
    }
  },
  {
    "id": "m41",
    "topic": "Protein trafficking",
    "answer": "Importin α",
    "clue": "In classical nuclear import, I directly recognize a basic nuclear localization signal on cargo and link that cargo to importin β.",
    "note": "Accept importin alpha. This clue specifies the NLS-binding adaptor, not the pore-interacting transport receptor.",
    "source": {
      "deck": "[1] Nuclear Transport.pptx",
      "slide": 8
    }
  },
  {
    "id": "m42",
    "topic": "Protein trafficking",
    "answer": "Importin β",
    "clue": "In classical nuclear import, I bind importin α and interact with FG-repeat nucleoporins to carry the import complex through the pore. Nuclear Ran-GTP binds me to promote disassembly.",
    "note": "Accept importin beta or karyopherin beta 1. Importin α directly recognizes the classical NLS.",
    "source": {
      "deck": "[1] Nuclear Transport.pptx",
      "slide": 12
    }
  },
  {
    "id": "m43",
    "topic": "Protein trafficking",
    "answer": "CRM1 (exportin 1)",
    "clue": "I recognize many leucine-rich nuclear export signals and assemble with cargo and Ran-GTP in the nucleus to transport the cargo outward.",
    "note": "Accept CRM1, XPO1, or exportin 1. Cytoplasmic Ran GTP hydrolysis promotes export-complex disassembly.",
    "source": {
      "deck": "[1] Nuclear Transport.pptx",
      "slide": 13
    }
  },
  {
    "id": "m44",
    "topic": "Protein trafficking",
    "answer": "Ran",
    "clue": "I am the small GTPase enriched in my GTP-bound form in the nucleus. My nucleotide-state gradient gives directionality to importin/exportin transport.",
    "note": "Accept Ran GTPase. Ran-GTP promotes import-complex disassembly and export-complex assembly.",
    "source": {
      "deck": "[1] Nuclear Transport.pptx",
      "slide": 10
    }
  },
  {
    "id": "m45",
    "topic": "Protein trafficking",
    "answer": "RCC1 (RanGEF)",
    "clue": "I associate with nuclear chromatin and promote GDP release from Ran so GTP can bind, maintaining high nuclear Ran-GTP.",
    "note": "Accept RCC1 or Ran guanine nucleotide exchange factor. I exchange nucleotide; I do not phosphorylate GDP.",
    "source": {
      "deck": "[1] Nuclear Transport.pptx",
      "slide": 10
    }
  },
  {
    "id": "m46",
    "topic": "Protein trafficking",
    "answer": "RanGAP",
    "clue": "On the cytoplasmic side of nuclear transport, I stimulate Ran to hydrolyze its bound GTP, helping maintain the Ran nucleotide-state gradient.",
    "note": "Accept Ran GTPase-activating protein. RCC1 instead promotes nucleotide exchange in the nucleus.",
    "source": {
      "deck": "[1] Nuclear Transport.pptx",
      "slide": 14
    }
  },
  {
    "id": "m47",
    "topic": "Protein trafficking",
    "answer": "Nuclear pore complex (NPC)",
    "clue": "I am the large multiprotein gateway spanning the nuclear envelope. Small molecules can diffuse through me, while many large cargos use transport receptors to pass selectively.",
    "note": "Accept NPC. Nuclear cargo can pass through while remaining folded.",
    "source": {
      "deck": "[1] Nuclear Transport.pptx",
      "slide": 9
    }
  },
  {
    "id": "m48",
    "topic": "Protein trafficking",
    "answer": "FG-nucleoporins",
    "clue": "We contain phenylalanine–glycine repeats and form the selective permeability barrier within nuclear pores. Importins and exportins interact with us during cargo passage.",
    "note": "Accept FG-Nups. We are components of the NPC, not the nuclear transport receptors.",
    "source": {
      "deck": "[1] Nuclear Transport.pptx",
      "slide": 9
    }
  }
];
