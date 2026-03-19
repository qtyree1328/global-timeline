// 120+ major world events 1900-2025
// Categories: war, politics, genocide, nuclear, civil-rights, economic, space-tech, pandemic, terrorism, decolonization
export const events = [
  {
    id: 'russo-japanese-war',
    date: '1904-02-08',
    endDate: '1905-09-05',
    title: 'Russo-Japanese War',
    category: 'war',
    lat: 38.7, lng: 125.8,
    connections: ['wwi'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/MIKASA.jpg/640px-MIKASA.jpg',
    description: `The Russo-Japanese War (1904–1905) was the first major military victory of an Asian power over a European one in modern times. Japan sought to expand its influence in Manchuria and Korea, directly challenging Russian imperial ambitions in the region. The conflict began with a surprise Japanese naval attack on the Russian fleet at Port Arthur.

After a series of costly battles on land and sea, including the decisive Battle of Tsushima where the Japanese navy destroyed the Russian Baltic Fleet, Russia was forced to negotiate. The Treaty of Portsmouth, mediated by U.S. President Theodore Roosevelt, ended the war.

The war demonstrated the rise of Japan as a major world power and exposed the weakness of the Russian Empire, contributing to the 1905 Russian Revolution. It also set the stage for the complex alliance systems that would eventually lead to World War I.`
  },
  {
    id: 'womens-suffrage-uk',
    date: '1903-10-10',
    title: "Women's Suffrage Movement Begins (UK)",
    category: 'civil-rights',
    lat: 53.48, lng: -2.24,
    connections: ['womens-suffrage-us'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Suffragette_Emily_Davison.jpg/440px-Suffragette_Emily_Davison.jpg',
    description: `Emmeline Pankhurst founded the Women's Social and Political Union (WSPU) in Manchester in 1903, launching a militant campaign for women's voting rights. The suffragettes employed increasingly radical tactics including hunger strikes, arson, and public demonstrations to draw attention to their cause.

The movement gained widespread public attention when Emily Davison stepped in front of King George V's horse at the Epsom Derby in 1913 and was fatally injured. During World War I, women took on crucial roles in factories and services, demonstrating their capability and strengthening the case for suffrage.

The Representation of the People Act 1918 granted voting rights to women over 30 who met property qualifications, and in 1928 the Equal Franchise Act extended the vote to all women over 21 on equal terms with men.`
  },
  {
    id: 'russian-revolution-1905',
    date: '1905-01-22',
    title: '1905 Russian Revolution',
    category: 'politics',
    lat: 59.93, lng: 30.32,
    connections: ['russo-japanese-war', 'russian-revolution'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bloody_Sunday_Massacre.jpg/640px-Bloody_Sunday_Massacre.jpg',
    description: `The 1905 Revolution began on "Bloody Sunday," January 22, when Imperial guards fired on peaceful demonstrators marching to the Winter Palace in St. Petersburg to petition Tsar Nicholas II. The massacre sparked nationwide strikes, peasant uprisings, and military mutinies.

The revolution was fueled by widespread discontent with the autocratic regime, worsened by defeat in the Russo-Japanese War, economic hardship, and lack of political representation. The famous mutiny aboard the battleship Potemkin symbolized the breakdown of loyalty within the armed forces.

Though ultimately suppressed, the revolution forced the Tsar to issue the October Manifesto, creating the Duma (parliament) and granting limited civil liberties. However, these concessions proved insufficient, and the unresolved tensions would explode again in 1917.`
  },
  {
    id: 'wwi-start',
    date: '1914-07-28',
    title: 'World War I Begins',
    category: 'war',
    lat: 43.86, lng: 18.43,
    connections: ['wwi-western-front', 'armenian-genocide', 'russian-revolution', 'treaty-versailles'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Archduke_Franz_Ferdinand_of_Austria_-_b%26w.jpg/440px-Archduke_Franz_Ferdinand_of_Austria_-_b%26w.jpg',
    description: `World War I erupted after the assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo on June 28, 1914. A complex web of alliances, imperial rivalries, and nationalist tensions quickly transformed a regional crisis into a global conflict. Austria-Hungary declared war on Serbia on July 28, triggering a chain reaction of mobilizations.

The Central Powers (Germany, Austria-Hungary, Ottoman Empire) faced the Allied Powers (France, Britain, Russia, and later the United States). The war introduced horrific new technologies including machine guns, poison gas, tanks, and aerial bombardment, while trench warfare on the Western Front created years of deadly stalemate.

By the time the armistice was signed on November 11, 1918, approximately 20 million people had died and 21 million were wounded. The war destroyed four empires (German, Austro-Hungarian, Ottoman, and Russian), redrew the map of Europe and the Middle East, and planted the seeds for World War II.`
  },
  {
    id: 'wwi-western-front',
    date: '1916-07-01',
    title: 'Battle of the Somme',
    category: 'war',
    lat: 50.01, lng: 2.69,
    connections: ['wwi-start'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cheshire_Regiment_trench_Somme_1916.jpg/640px-Cheshire_Regiment_trench_Somme_1916.jpg',
    description: `The Battle of the Somme, fought from July to November 1916, was one of the bloodiest battles in human history. On the first day alone, the British Army suffered nearly 60,000 casualties — the worst day in its history. The battle was intended to break the stalemate on the Western Front and relieve pressure on French forces at Verdun.

Despite months of fighting and over one million total casualties on all sides, the Allies advanced only about six miles. The battle saw the first use of tanks in warfare when British Mark I tanks were deployed in September 1916, though their early impact was limited.

The Somme became synonymous with the futility and horror of trench warfare. The catastrophic losses profoundly affected British society and led to growing disillusionment with the war and its leadership.`
  },
  {
    id: 'armenian-genocide',
    date: '1915-04-24',
    title: 'Armenian Genocide',
    category: 'genocide',
    lat: 39.77, lng: 44.57,
    connections: ['wwi-start'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Morgenthau336.jpg/440px-Morgenthau336.jpg',
    description: `Beginning on April 24, 1915, the Ottoman Empire systematically exterminated 1.5 million ethnic Armenians during and after World War I. The genocide began with the arrest and execution of Armenian intellectuals and community leaders in Constantinople, followed by mass deportations and death marches into the Syrian desert.

Men were typically separated and executed outright, while women, children, and the elderly were forced on death marches through the desert without food or water. Those who survived the marches were often placed in concentration camps. Sexual violence, forced conversion, and the abduction of children were widespread.

The Armenian Genocide is widely recognized as one of the first modern genocides and served as a template for later atrocities. Raphael Lemkin, who coined the term "genocide," cited the Armenian case as a primary example. Turkey continues to dispute the characterization of these events as genocide.`
  },
  {
    id: 'russian-revolution',
    date: '1917-10-25',
    title: 'Russian Revolution',
    category: 'politics',
    lat: 59.93, lng: 30.32,
    connections: ['russian-revolution-1905', 'wwi-start', 'ussr-formation', 'communism-spread'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Stormningen_av_vinterpalatset.jpg/640px-Stormningen_av_vinterpalatset.jpg',
    description: `The Russian Revolution of 1917 comprised two revolutions that fundamentally changed the course of world history. The February Revolution overthrew Tsar Nicholas II and established a provisional government, while the October Revolution brought Vladimir Lenin and the Bolsheviks to power.

War-weariness, food shortages, and government incompetence fueled mass discontent. Lenin's promise of "Peace, Bread, and Land" resonated with soldiers, workers, and peasants. The Bolshevik seizure of the Winter Palace on October 25 (November 7, New Style) marked the beginning of communist rule.

The revolution led to a brutal civil war (1917–1922) between the Red Army and various White forces. The Bolshevik victory resulted in the creation of the Soviet Union, the world's first communist state, which would reshape global politics for the rest of the century.`
  },
  {
    id: 'spanish-flu',
    date: '1918-03-04',
    title: 'Spanish Flu Pandemic',
    category: 'pandemic',
    lat: 39.05, lng: -98.35,
    connections: ['wwi-start'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Spanish_flu_hospital.png/640px-Spanish_flu_hospital.png',
    description: `The 1918 influenza pandemic, misleadingly called the "Spanish Flu," was the deadliest pandemic in modern history. It infected approximately 500 million people — about one-third of the world's population — and killed an estimated 50 to 100 million people worldwide between 1918 and 1920.

The pandemic came in three waves: a mild spring wave in 1918, a devastating fall wave, and a final winter wave. Unusually, the virus was most lethal among healthy young adults aged 20–40, likely due to a cytokine storm immune response. Wartime censorship suppressed reporting in belligerent countries, but neutral Spain reported freely, giving the misleading impression it originated there.

The pandemic overwhelmed healthcare systems, led to mass quarantines and closures, and had profound economic and social effects. It killed more people than World War I and reshaped public health policy worldwide, though it was largely forgotten by the public for decades.`
  },
  {
    id: 'treaty-versailles',
    date: '1919-06-28',
    title: 'Treaty of Versailles',
    category: 'politics',
    lat: 48.80, lng: 2.12,
    connections: ['wwi-start', 'rise-fascism', 'great-depression'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Treaty_of_Versailles_Signing%2C_Hall_of_Mirrors.jpg/640px-Treaty_of_Versailles_Signing%2C_Hall_of_Mirrors.jpg',
    description: `The Treaty of Versailles, signed on June 28, 1919, officially ended World War I and imposed harsh terms on Germany. The treaty required Germany to accept sole responsibility for the war (the "war guilt" clause), pay massive reparations, cede territory, limit its military, and surrender its overseas colonies.

The treaty also created the League of Nations, an international organization intended to prevent future wars, though the United States never joined. New nations were carved from the defeated empires, redrawing the maps of Europe and the Middle East with consequences that persist today.

Many historians view the treaty as a contributing cause of World War II. The punitive terms humiliated Germany, fueled economic hardship, and provided fertile ground for the rise of Adolf Hitler and the Nazi Party. John Maynard Keynes famously warned in "The Economic Consequences of the Peace" that the treaty's harsh terms would lead to instability.`
  },
  {
    id: 'ussr-formation',
    date: '1922-12-30',
    title: 'Formation of the Soviet Union',
    category: 'politics',
    lat: 55.75, lng: 37.62,
    connections: ['russian-revolution', 'communism-spread'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Soviet_Union_flag.png/640px-Soviet_Union_flag.png',
    description: `The Union of Soviet Socialist Republics (USSR) was formally established on December 30, 1922, uniting Russia, Ukraine, Belarus, and the Transcaucasian Federation under a single communist government. It became the world's first constitutionally socialist state, covering over one-sixth of Earth's land surface.

Under Lenin and later Stalin, the USSR pursued rapid industrialization, collectivization of agriculture, and the elimination of political opposition. The state controlled all aspects of economic and social life. Stalin's Great Purges of the 1930s killed or imprisoned millions of perceived enemies of the state.

The Soviet Union would become one of the two superpowers of the 20th century, leading the communist bloc during the Cold War. Its ideology inspired revolutionary movements worldwide and its rivalry with the United States shaped global politics for nearly seven decades until its dissolution in 1991.`
  },
  {
    id: 'rise-fascism',
    date: '1922-10-28',
    title: 'Rise of Fascism — Mussolini Takes Power',
    category: 'politics',
    lat: 41.90, lng: 12.50,
    connections: ['treaty-versailles', 'spanish-civil-war', 'hitler-power'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Marcia_su_Roma.jpg/640px-Marcia_su_Roma.jpg',
    description: `On October 28, 1922, Benito Mussolini and his Blackshirt followers marched on Rome, leading King Victor Emmanuel III to invite Mussolini to form a government. This marked the rise of the first fascist regime in Europe, establishing a template for authoritarian movements worldwide.

Fascism combined extreme nationalism, militarism, and the suppression of political opposition with corporatist economic policies. Mussolini dismantled democratic institutions, controlled the press, and used violence against opponents while pursuing aggressive foreign policy, including the invasion of Ethiopia in 1935.

The success of Italian fascism inspired similar movements across Europe, most notably Adolf Hitler's Nazi Party in Germany. The fascist model of a single-party totalitarian state, charismatic leadership, and mass mobilization would be emulated by dictators worldwide and lead directly to the catastrophe of World War II.`
  },
  {
    id: 'great-depression',
    date: '1929-10-29',
    title: 'Great Depression Begins',
    category: 'economic',
    lat: 40.71, lng: -74.01,
    connections: ['treaty-versailles', 'hitler-power', 'new-deal'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Crowd_outside_nyse.jpg/440px-Crowd_outside_nyse.jpg',
    description: `The Great Depression began with the catastrophic stock market crash of October 29, 1929 — "Black Tuesday" — when the Dow Jones Industrial Average plummeted. The crash wiped out millions of investors and triggered a cascade of bank failures, business closures, and mass unemployment that spread across the globe.

At its worst, unemployment in the United States reached 25%, industrial production fell by nearly half, and international trade collapsed by more than 60%. Breadlines, Hoovervilles (shantytowns), and the Dust Bowl became defining images of the era. The depression affected virtually every country in the world.

The economic devastation had profound political consequences. In the United States, it led to Franklin Roosevelt's New Deal. In Germany, mass unemployment and economic despair helped Adolf Hitler rise to power. The Depression fundamentally changed attitudes about government's role in the economy and led to new regulatory frameworks that shaped modern capitalism.`
  },
  {
    id: 'hitler-power',
    date: '1933-01-30',
    title: 'Hitler Becomes Chancellor of Germany',
    category: 'politics',
    lat: 52.52, lng: 13.40,
    connections: ['rise-fascism', 'great-depression', 'treaty-versailles', 'holocaust', 'wwii-start'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bundesarchiv_Bild_183-H28422%2C_Reichskabinett_Adolf_Hitler.jpg/640px-Bundesarchiv_Bild_183-H28422%2C_Reichskabinett_Adolf_Hitler.jpg',
    description: `On January 30, 1933, Adolf Hitler was appointed Chancellor of Germany by President Paul von Hindenburg. Within months, Hitler used the Reichstag fire as a pretext to suspend civil liberties and, through the Enabling Act, granted himself dictatorial powers, effectively ending the Weimar Republic.

Hitler's rise was fueled by the economic devastation of the Great Depression, resentment over the Treaty of Versailles, and a campaign built on antisemitism, ultranationalism, and the promise to restore German greatness. The Nazi Party used propaganda, paramilitary violence, and exploitation of democratic processes to consolidate total power.

Once in power, Hitler immediately began persecuting political opponents, Jews, Roma, and other minorities. He rearmed Germany in violation of the Versailles Treaty, remilitarized the Rhineland, and pursued aggressive territorial expansion — the Anschluss with Austria and the annexation of the Sudetenland — setting the stage for World War II.`
  },
  {
    id: 'spanish-civil-war',
    date: '1936-07-17',
    title: 'Spanish Civil War',
    category: 'war',
    lat: 40.42, lng: -3.70,
    connections: ['rise-fascism', 'wwii-start'],
    image: 'https://upload.wikimedia.org/wikipedia/en/7/74/Guernica.jpg',
    description: `The Spanish Civil War (1936–1939) was a devastating conflict between the Republican government and Nationalist rebels led by General Francisco Franco. The war became an ideological battleground pitting democracy and communism against fascism, drawing international involvement from across Europe.

Nazi Germany and Fascist Italy provided substantial military support to Franco's Nationalists, including the infamous bombing of Guernica — immortalized in Picasso's masterwork. The Soviet Union backed the Republicans, while thousands of international volunteers formed the International Brigades to fight fascism. Britain and France pursued a policy of non-intervention.

Franco's victory in 1939 established a fascist dictatorship that lasted until his death in 1975. The war served as a rehearsal for World War II, with Germany and Italy testing new military tactics and weapons. An estimated 500,000 people died, and hundreds of thousands fled into exile.`
  },
  {
    id: 'wwii-start',
    date: '1939-09-01',
    title: 'World War II Begins — Invasion of Poland',
    category: 'war',
    lat: 52.23, lng: 21.01,
    connections: ['hitler-power', 'holocaust', 'wwii-dday', 'wwii-pacific', 'hiroshima', 'wwii-end'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Schleswig-Holstein_firing_Westerplatte.jpg/640px-Schleswig-Holstein_firing_Westerplatte.jpg',
    description: `World War II began on September 1, 1939, when Nazi Germany invaded Poland using the devastating new tactic of Blitzkrieg (lightning war). Britain and France declared war on Germany two days later, but could not prevent Poland's rapid defeat, especially after the Soviet Union invaded from the east under the secret Molotov-Ribbentrop Pact.

Germany quickly conquered Denmark, Norway, the Netherlands, Belgium, Luxembourg, and France by June 1940. Britain stood alone in Western Europe, enduring the Blitz and the Battle of Britain. The war expanded dramatically in 1941 when Germany invaded the Soviet Union (Operation Barbarossa) and Japan attacked Pearl Harbor, bringing the United States into the conflict.

World War II became the deadliest conflict in human history, killing an estimated 70–85 million people — about 3% of the 1940 world population. It encompassed every continent and ocean, involved the mobilization of over 100 million military personnel, and included the Holocaust, strategic bombing of civilians, and the only use of nuclear weapons in warfare.`
  },
  {
    id: 'holocaust',
    date: '1941-06-22',
    title: 'The Holocaust',
    category: 'genocide',
    lat: 50.03, lng: 19.18,
    connections: ['hitler-power', 'wwii-start', 'israel-creation'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Auschwitz_I_entrance_snow.jpg/640px-Auschwitz_I_entrance_snow.jpg',
    description: `The Holocaust was the systematic, state-sponsored murder of six million Jews by Nazi Germany and its collaborators during World War II. While antisemitic persecution began immediately after Hitler took power in 1933, the genocide escalated to industrialized mass murder following the invasion of the Soviet Union in 1941 and the Wannsee Conference of January 1942.

The Nazis established a network of concentration camps, labor camps, and extermination camps — including Auschwitz-Birkenau, Treblinka, and Sobibor — where millions were murdered in gas chambers. Jews from across occupied Europe were transported by rail to these death camps. In addition to Jews, the Nazis targeted Roma, disabled people, homosexuals, political prisoners, and Soviet POWs.

The Holocaust stands as the most thoroughly documented genocide in history. Its horrors led to the establishment of the concept of "crimes against humanity" at the Nuremberg Trials and directly influenced the creation of the Universal Declaration of Human Rights and the State of Israel. The phrase "Never Again" became a rallying cry for human rights.`
  },
  {
    id: 'wwii-dday',
    date: '1944-06-06',
    title: 'D-Day — Allied Invasion of Normandy',
    category: 'war',
    lat: 49.37, lng: -0.88,
    connections: ['wwii-start', 'wwii-end'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Into_the_Jaws_of_Death_23-0455M_edit.jpg/640px-Into_the_Jaws_of_Death_23-0455M_edit.jpg',
    description: `On June 6, 1944, the Allied forces launched Operation Overlord, the largest amphibious military operation in history. Approximately 156,000 American, British, and Canadian troops landed on five beaches along a 50-mile stretch of the heavily fortified coast of Normandy, France.

The invasion was preceded by months of planning and elaborate deception operations. Paratroopers landed behind enemy lines in the early morning hours, while naval bombardment and air support softened German defenses. Despite fierce resistance, particularly at Omaha Beach, the Allies established a foothold by the end of the day.

D-Day marked the beginning of the end of Nazi Germany's control of Western Europe. Within months, the Allies liberated Paris and pushed into Germany. The success of the Normandy invasion, combined with Soviet advances from the east, sealed the fate of the Third Reich.`
  },
  {
    id: 'wwii-pacific',
    date: '1941-12-07',
    title: 'Attack on Pearl Harbor',
    category: 'war',
    lat: 21.36, lng: -157.95,
    connections: ['wwii-start', 'hiroshima'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/The_USS_Arizona_%28BB-39%29_burning_after_the_Japanese_attack_on_Pearl_Harbor_-_NARA_195617_-_Edit.jpg/640px-The_USS_Arizona_%28BB-39%29_burning_after_the_Japanese_attack_on_Pearl_Harbor_-_NARA_195617_-_Edit.jpg',
    description: `On December 7, 1941, the Imperial Japanese Navy launched a surprise military strike against the United States naval base at Pearl Harbor, Hawaii. The attack killed 2,403 Americans, sank or damaged 21 ships, and destroyed 188 aircraft. President Roosevelt called it "a date which will live in infamy."

Japan launched the attack to neutralize the U.S. Pacific Fleet and prevent American interference with its military conquests in Southeast Asia. However, the critical U.S. aircraft carriers were at sea during the attack, and vital infrastructure like fuel storage and repair facilities were left intact.

The attack unified American public opinion and led to the U.S. declaration of war against Japan the next day — and Germany's declaration of war on the U.S. three days later. American industrial might and military mobilization would prove decisive in both the Pacific and European theaters, fundamentally altering the outcome of the war.`
  },
  {
    id: 'manhattan-project',
    date: '1942-08-13',
    title: 'Manhattan Project',
    category: 'nuclear',
    lat: 35.88, lng: -106.30,
    connections: ['hiroshima', 'cuban-missile-crisis'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trinity_shot_color.jpg/440px-Trinity_shot_color.jpg',
    description: `The Manhattan Project was a top-secret research program that produced the first nuclear weapons during World War II. Led by physicist J. Robert Oppenheimer and General Leslie Groves, the project employed over 125,000 workers at multiple secret sites across the United States, including Los Alamos, Oak Ridge, and Hanford.

The project brought together many of the world's greatest scientists, including Enrico Fermi, Niels Bohr, and Richard Feynman. On July 16, 1945, the first nuclear device was successfully detonated in the Trinity test at Alamogordo, New Mexico. Oppenheimer famously recalled a line from Hindu scripture: "Now I am become Death, the destroyer of worlds."

The Manhattan Project cost nearly $2 billion (about $30 billion in today's dollars) and represented an unprecedented mobilization of scientific resources. Its success led directly to the atomic bombings of Hiroshima and Nagasaki, ended World War II, and launched the nuclear age and the arms race that defined the Cold War.`
  },
  {
    id: 'hiroshima',
    date: '1945-08-06',
    title: 'Atomic Bombings of Hiroshima and Nagasaki',
    category: 'nuclear',
    lat: 34.39, lng: 132.45,
    connections: ['manhattan-project', 'wwii-end', 'cuban-missile-crisis'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Nagasakibomb.jpg/440px-Nagasakibomb.jpg',
    description: `On August 6, 1945, the United States dropped the uranium bomb "Little Boy" on Hiroshima, Japan, instantly killing approximately 80,000 people. Three days later, the plutonium bomb "Fat Man" was dropped on Nagasaki, killing about 40,000 immediately. By the end of 1945, the death toll from both bombings reached an estimated 200,000 due to injuries and radiation sickness.

The bombings remain the only use of nuclear weapons in armed conflict. The blasts created fireballs reaching temperatures of millions of degrees, followed by devastating shockwaves and radiation that caused horrific injuries and long-term health effects including cancer and birth defects in survivors known as hibakusha.

Japan announced its surrender on August 15, 1945, ending World War II. The bombings sparked an enduring moral and strategic debate. Proponents argued they prevented a costly invasion of Japan that could have killed millions. Critics contend Japan was already close to surrender and that the bombings constituted a war crime. The bombings launched the nuclear age and the existential threat of atomic warfare.`
  },
  {
    id: 'wwii-end',
    date: '1945-09-02',
    title: 'World War II Ends',
    category: 'war',
    lat: 35.45, lng: 139.69,
    connections: ['hiroshima', 'united-nations', 'cold-war', 'nuremberg'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Missouri-flyover.jpg/640px-Missouri-flyover.jpg',
    description: `World War II officially ended on September 2, 1945, when Japanese officials signed the instrument of surrender aboard the USS Missouri in Tokyo Bay. Victory in Europe had come on May 8, 1945, following Hitler's suicide and Germany's unconditional surrender.

The war's aftermath reshaped the entire world order. Europe and much of Asia lay in ruins. An estimated 70–85 million people had died. The United States and Soviet Union emerged as the two dominant superpowers, and their ideological rivalry would define the next half-century. The war also catalyzed decolonization movements across Asia and Africa.

The post-war period saw the creation of the United Nations, the Universal Declaration of Human Rights, the Nuremberg Trials establishing accountability for war crimes, and the Marshall Plan for European reconstruction. The war's lessons continue to shape international law, human rights norms, and the global commitment to preventing such catastrophic conflicts.`
  },
  {
    id: 'united-nations',
    date: '1945-10-24',
    title: 'United Nations Founded',
    category: 'politics',
    lat: 40.75, lng: -73.97,
    connections: ['wwii-end'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/United_Nations_Flags_-_cropped.jpg/640px-United_Nations_Flags_-_cropped.jpg',
    description: `The United Nations was established on October 24, 1945, when its Charter came into force. Founded by 51 nations committed to maintaining international peace and security, the UN replaced the failed League of Nations with a more robust framework for international cooperation.

The UN Charter established six principal organs: the General Assembly, Security Council, Economic and Social Council, Trusteeship Council, International Court of Justice, and Secretariat. The five permanent Security Council members (US, UK, France, China, USSR/Russia) were given veto power over substantive resolutions.

Over the following decades, the UN would grow to include virtually every nation on Earth and expand its work into human rights, humanitarian aid, development, and international law. While criticized for its limitations and the veto system, the UN has played crucial roles in peacekeeping, decolonization, and establishing international norms and standards.`
  },
  {
    id: 'nuremberg',
    date: '1945-11-20',
    title: 'Nuremberg Trials',
    category: 'politics',
    lat: 49.45, lng: 11.08,
    connections: ['wwii-end', 'holocaust'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Defendants_in_the_dock_at_the_Nuremberg_Trials.jpg/640px-Defendants_in_the_dock_at_the_Nuremberg_Trials.jpg',
    description: `The Nuremberg Trials (1945–1946) were a series of military tribunals that prosecuted prominent leaders of Nazi Germany for war crimes, crimes against peace, and crimes against humanity. The International Military Tribunal tried 22 major war criminals, resulting in 12 death sentences, including Hermann Göring.

The trials established the revolutionary principle that individuals — including heads of state — could be held criminally responsible for violations of international law. The defense of "just following orders" was rejected as a legal justification for atrocities. The concept of "crimes against humanity" was codified for the first time.

The Nuremberg Trials laid the groundwork for modern international criminal law and influenced the creation of the International Criminal Court decades later. They also produced an extensive documentary record of Nazi atrocities that has been invaluable to historians and serves as an enduring testament to the horrors of the Holocaust.`
  },
  {
    id: 'india-independence',
    date: '1947-08-15',
    title: 'Indian Independence & Partition',
    category: 'decolonization',
    lat: 28.61, lng: 77.21,
    connections: ['decolonization-africa'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mountbatten_with_Nehru_and_Jinnah.jpg/440px-Mountbatten_with_Nehru_and_Jinnah.jpg',
    description: `On August 15, 1947, India gained independence from British colonial rule after a decades-long struggle led by Mahatma Gandhi, Jawaharlal Nehru, and countless others. The nonviolent resistance movement pioneered by Gandhi — including civil disobedience, boycotts, and the famous Salt March — inspired liberation movements worldwide.

However, independence came with the traumatic Partition of British India into two nations: predominantly Hindu India and predominantly Muslim Pakistan (including East Pakistan, later Bangladesh). The partition triggered one of the largest mass migrations in history, with 10–20 million people displaced and an estimated 1–2 million killed in communal violence.

Indian independence marked a turning point in the decline of the British Empire and accelerated decolonization movements across Asia and Africa. Gandhi was assassinated on January 30, 1948, but his philosophy of nonviolent resistance continued to influence civil rights and liberation movements, including the American Civil Rights Movement.`
  },
  {
    id: 'israel-creation',
    date: '1948-05-14',
    title: 'Creation of Israel',
    category: 'politics',
    lat: 32.07, lng: 34.78,
    connections: ['holocaust', 'arab-israeli-wars'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Declaration_of_State_of_Israel_1948.jpg/640px-Declaration_of_State_of_Israel_1948.jpg',
    description: `On May 14, 1948, David Ben-Gurion proclaimed the establishment of the State of Israel, fulfilling the Zionist aspiration for a Jewish homeland. The declaration came as British mandate rule ended, following a UN partition plan that divided Palestine into Jewish and Arab states — a plan accepted by Jewish leaders but rejected by Arab states and Palestinian Arabs.

The declaration immediately triggered the 1948 Arab-Israeli War, as armies from Egypt, Jordan, Syria, Iraq, and Lebanon invaded the new state. Israel survived and expanded its territory beyond the UN partition boundaries. Approximately 700,000 Palestinians fled or were expelled during the conflict — an event Palestinians call the Nakba ("catastrophe").

The creation of Israel fundamentally transformed the Middle East and created one of the world's most enduring conflicts. The unresolved question of Palestinian statehood, borders, refugees, and the status of Jerusalem has been at the center of regional and international diplomacy for over seven decades.`
  },
  {
    id: 'cold-war',
    date: '1947-03-12',
    title: 'Cold War Begins — Truman Doctrine',
    category: 'politics',
    lat: 38.90, lng: -77.04,
    connections: ['wwii-end', 'korean-war', 'cuban-missile-crisis', 'vietnam-war', 'berlin-wall-fall'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Berlinermauer.jpg/640px-Berlinermauer.jpg',
    description: `The Cold War emerged from the post-WWII rivalry between the United States and the Soviet Union — two superpowers with fundamentally opposed ideological systems. The Truman Doctrine of March 1947, pledging American support for nations resisting communism, is often cited as the formal beginning of this global struggle.

The Cold War divided the world into competing blocs, with NATO in the West and the Warsaw Pact in the East. It manifested in an arms race (including the development of hydrogen bombs and ICBMs), proxy wars (Korea, Vietnam, Afghanistan), the space race, and constant ideological competition. The Berlin Wall, erected in 1961, became its most potent symbol.

Though the superpowers never engaged in direct military conflict, the Cold War shaped virtually every aspect of international relations for nearly half a century. It influenced domestic politics, culture, science, and technology in both blocs, and its proxy conflicts caused millions of casualties across the developing world.`
  },
  {
    id: 'marshall-plan',
    date: '1948-04-03',
    title: 'Marshall Plan',
    category: 'economic',
    lat: 38.90, lng: -77.04,
    connections: ['wwii-end', 'cold-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Marshall_Plan_poster.JPG/440px-Marshall_Plan_poster.JPG',
    description: `The Marshall Plan (European Recovery Program) was an American initiative to provide economic aid to Western Europe after World War II. Proposed by Secretary of State George C. Marshall in June 1947, the program distributed approximately $13 billion (about $170 billion in today's dollars) to 16 European countries between 1948 and 1952.

The plan was motivated by both humanitarian concern for war-devastated Europe and strategic calculation — a prosperous Western Europe would be less susceptible to communist influence. The aid funded reconstruction of infrastructure, industrial modernization, and trade liberalization. It was offered to all European nations, including the Soviet Union, which refused and pressured its satellites to do the same.

The Marshall Plan is widely credited with accelerating European economic recovery, fostering political stability, and laying the groundwork for European integration that would eventually lead to the European Union. It remains one of the most successful foreign aid programs in history and a landmark in American foreign policy.`
  },
  {
    id: 'nato-formation',
    date: '1949-04-04',
    title: 'NATO Founded',
    category: 'politics',
    lat: 50.85, lng: 4.35,
    connections: ['cold-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_NATO.svg/640px-Flag_of_NATO.svg.png',
    description: `The North Atlantic Treaty Organization (NATO) was established on April 4, 1949, when 12 nations signed the North Atlantic Treaty in Washington, D.C. The alliance was created as a collective defense pact against the Soviet threat, with its key Article 5 establishing that an armed attack against one member would be considered an attack against all.

The founding members — the United States, Canada, and ten Western European nations — committed to mutual defense and consultation. NATO represented the most significant peacetime military alliance in history and formalized the division of Europe into Western and Soviet-aligned blocs.

NATO has expanded from 12 to 32 members, incorporating former Warsaw Pact nations after the Cold War. The alliance invoked Article 5 for the first and only time after the September 11, 2001 attacks. NATO remains the cornerstone of Western collective security, though debates about burden-sharing, expansion, and its mission continue.`
  },
  {
    id: 'chinese-revolution',
    date: '1949-10-01',
    title: 'Chinese Communist Revolution',
    category: 'politics',
    lat: 39.91, lng: 116.40,
    connections: ['communism-spread', 'korean-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mao_Zedong_proclaiming_the_establishment_of_the_PRC_in_1949.jpg/440px-Mao_Zedong_proclaiming_the_establishment_of_the_PRC_in_1949.jpg',
    description: `On October 1, 1949, Mao Zedong proclaimed the People's Republic of China from the Tiananmen Gate in Beijing, following the Communist Party's victory in the Chinese Civil War. The defeated Nationalists under Chiang Kai-shek fled to Taiwan, where they established the Republic of China.

The Communist victory was the culmination of decades of civil war, interrupted by the Japanese invasion during World War II. Mao's forces prevailed through guerrilla warfare, broad peasant support, and effective political organization, despite the Nationalists' initial military superiority and American backing.

The revolution transformed the world's most populous nation into a communist state, dramatically shifting the global balance of power. Under Mao, China underwent radical social and economic transformations, including land reform, the disastrous Great Leap Forward (1958–1962), and the Cultural Revolution (1966–1976), which collectively caused tens of millions of deaths.`
  },
  {
    id: 'korean-war',
    date: '1950-06-25',
    title: 'Korean War',
    category: 'war',
    lat: 37.57, lng: 126.98,
    connections: ['cold-war', 'chinese-revolution'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Korean_War_Montage_2.png/440px-Korean_War_Montage_2.png',
    description: `The Korean War began on June 25, 1950, when North Korean forces, backed by the Soviet Union and China, invaded South Korea. The United Nations, led by the United States, intervened to defend South Korea in what became the first major proxy war of the Cold War era.

After initial North Korean advances that nearly conquered the entire peninsula, General Douglas MacArthur's daring amphibious landing at Inchon turned the tide. UN forces pushed north toward the Chinese border, prompting a massive Chinese intervention that drove them back. The war settled into a bloody stalemate near the 38th parallel.

An armistice was signed on July 27, 1953, but no peace treaty was ever concluded, leaving the two Koreas technically still at war. The conflict killed approximately 2.5 million civilians and over 1.5 million military personnel. Korea remains divided to this day, with the heavily fortified Demilitarized Zone (DMZ) separating the two nations.`
  },
  {
    id: 'communism-spread',
    date: '1950-01-01',
    title: 'Spread of Communism Globally',
    category: 'politics',
    lat: 21.03, lng: 105.85,
    connections: ['russian-revolution', 'chinese-revolution', 'cuban-revolution', 'vietnam-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hammer_and_sickle_red_on_transparent.svg/440px-Hammer_and_sickle_red_on_transparent.svg.png',
    description: `Following World War II, communism spread rapidly across the globe. Soviet-backed regimes were installed throughout Eastern Europe (Poland, Czechoslovakia, Hungary, Romania, Bulgaria, East Germany), creating the "Iron Curtain" that Churchill described in his 1946 speech. China fell to communism in 1949, dramatically expanding the communist world.

Communist movements and revolutions spread to Southeast Asia (Vietnam, Laos, Cambodia), Latin America (Cuba), Africa (Ethiopia, Mozambique, Angola), and elsewhere. The "domino theory" — that one country falling to communism would trigger its neighbors to follow — drove Western foreign policy and interventions for decades.

At its peak in the 1980s, communist governments ruled approximately one-third of the world's population. However, economic stagnation, political repression, and the inherent contradictions of centrally planned economies led to the gradual collapse of most communist regimes, culminating in the fall of the Berlin Wall in 1989 and the dissolution of the Soviet Union in 1991.`
  },
  {
    id: 'womens-suffrage-us',
    date: '1920-08-18',
    title: "Women's Suffrage — 19th Amendment (US)",
    category: 'civil-rights',
    lat: 38.90, lng: -77.04,
    connections: ['womens-suffrage-uk'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Suffragists_Parade_Down_Fifth_Avenue%2C_1917.JPG/640px-Suffragists_Parade_Down_Fifth_Avenue%2C_1917.JPG',
    description: `The 19th Amendment to the United States Constitution, ratified on August 18, 1920, prohibited denying the right to vote based on sex. The amendment was the culmination of a movement that began at the Seneca Falls Convention in 1848, led by pioneers including Susan B. Anthony, Elizabeth Cady Stanton, and later Alice Paul.

The suffrage movement employed diverse tactics including petitions, marches, hunger strikes, and civil disobedience. The National Woman's Party picketed the White House during World War I, leading to arrests and forced feeding of imprisoned suffragists. These dramatic actions generated public sympathy and political pressure.

While the 19th Amendment was a landmark achievement, it did not immediately guarantee voting access for all women. Black women, especially in the South, continued to face voter suppression through poll taxes, literacy tests, and intimidation until the Voting Rights Act of 1965. The fight for women's political equality continued throughout the 20th and 21st centuries.`
  },
  {
    id: 'new-deal',
    date: '1933-03-09',
    title: "Roosevelt's New Deal",
    category: 'economic',
    lat: 38.90, lng: -77.04,
    connections: ['great-depression'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FDR_in_1933.jpg/440px-FDR_in_1933.jpg',
    description: `President Franklin D. Roosevelt's New Deal was a series of programs, public works projects, financial reforms, and regulations enacted between 1933 and 1939 in response to the Great Depression. The New Deal fundamentally transformed the relationship between the American government and its citizens.

Major programs included the Civilian Conservation Corps (CCC), the Works Progress Administration (WPA), Social Security, the Securities and Exchange Commission (SEC), and the Federal Deposit Insurance Corporation (FDIC). These initiatives provided relief for the unemployed, reformed the financial system, and invested in infrastructure across the country.

While the New Deal did not end the Depression — that required World War II's massive military spending — it provided critical relief, restored public confidence, and established the framework of the modern American welfare state. Its legacy includes Social Security, federal banking regulations, labor protections, and the expectation that government has a responsibility to ensure economic stability.`
  },
  {
    id: 'arab-israeli-wars',
    date: '1967-06-05',
    title: 'Six-Day War',
    category: 'war',
    lat: 31.77, lng: 35.23,
    connections: ['israel-creation', 'oil-crisis'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Soldiers_Western_Wall_1967.jpg/440px-Soldiers_Western_Wall_1967.jpg',
    description: `The Six-Day War (June 5–10, 1967) was a swift and decisive conflict in which Israel defeated the combined forces of Egypt, Syria, and Jordan. In just six days, Israel captured the Sinai Peninsula and Gaza Strip from Egypt, the West Bank and East Jerusalem from Jordan, and the Golan Heights from Syria.

The war was triggered by rising tensions including Egyptian President Nasser's closure of the Straits of Tiran and the massing of Arab armies on Israel's borders. Israel launched a preemptive strike that destroyed most of the Egyptian air force on the ground, establishing air superiority that proved decisive.

The territorial gains of the Six-Day War fundamentally reshaped the Middle East. Israel's occupation of the West Bank, Gaza, and East Jerusalem created the framework for the Israeli-Palestinian conflict that persists today. The war also led to UN Resolution 242, calling for Israeli withdrawal from occupied territories in exchange for peace, which remains a cornerstone of peace negotiations.`
  },
  {
    id: 'cuban-revolution',
    date: '1959-01-01',
    title: 'Cuban Revolution',
    category: 'politics',
    lat: 23.11, lng: -82.37,
    connections: ['communism-spread', 'cuban-missile-crisis'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Che_Guevara_-_Guerrillero_Heroico_by_Alberto_Korda.jpg/440px-Che_Guevara_-_Guerrillero_Heroico_by_Alberto_Korda.jpg',
    description: `The Cuban Revolution triumphed on January 1, 1959, when Fidel Castro's guerrilla forces overthrew the U.S.-backed dictator Fulgencio Batista. Castro, along with Che Guevara and other revolutionary leaders, had waged a guerrilla campaign from the Sierra Maestra mountains since 1956.

Castro initially denied being a communist, but quickly aligned Cuba with the Soviet Union, nationalized American-owned businesses, and established a one-party socialist state just 90 miles from the U.S. coast. The revolution prompted a mass exodus of Cubans, particularly to Miami, and led to the failed U.S.-backed Bay of Pigs invasion in April 1961.

The Cuban Revolution had enormous geopolitical consequences. It brought the Cold War to the Western Hemisphere, led directly to the Cuban Missile Crisis of 1962, and inspired revolutionary movements across Latin America and the developing world. Cuba remains under Communist Party rule, making it one of the longest-lasting socialist states.`
  },
  {
    id: 'cuban-missile-crisis',
    date: '1962-10-16',
    title: 'Cuban Missile Crisis',
    category: 'nuclear',
    lat: 22.40, lng: -79.95,
    connections: ['cold-war', 'cuban-revolution', 'manhattan-project'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Cuban_missiles.jpg/640px-Cuban_missiles.jpg',
    description: `The Cuban Missile Crisis of October 1962 was the closest the world came to nuclear war during the Cold War. American reconnaissance discovered Soviet nuclear missiles being installed in Cuba, just 90 miles from Florida. President John F. Kennedy imposed a naval blockade ("quarantine") and demanded their removal.

For 13 terrifying days, the world stood on the brink of nuclear annihilation as the United States and Soviet Union engaged in a tense diplomatic standoff. Behind-the-scenes negotiations between Kennedy and Soviet Premier Nikita Khrushchev eventually produced a resolution: the Soviets would remove their missiles from Cuba in exchange for a U.S. pledge not to invade Cuba and the secret removal of American missiles from Turkey.

The crisis had lasting consequences: it led to the installation of a direct communication link (the "hotline") between Washington and Moscow, accelerated arms control negotiations, and made both superpowers more cautious about direct confrontation. It demonstrated both the terrifying dangers of nuclear weapons and the possibility of diplomatic resolution even in extreme circumstances.`
  },
  {
    id: 'civil-rights-movement',
    date: '1963-08-28',
    title: 'US Civil Rights Movement — March on Washington',
    category: 'civil-rights',
    lat: 38.89, lng: -77.05,
    connections: ['civil-rights-act', 'apartheid'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/March_on_washington_Aug_28_1963.jpg/640px-March_on_washington_Aug_28_1963.jpg',
    description: `The March on Washington for Jobs and Freedom on August 28, 1963, was a landmark event of the American Civil Rights Movement. Over 250,000 people gathered at the Lincoln Memorial, where Martin Luther King Jr. delivered his iconic "I Have a Dream" speech, articulating a vision of racial equality and justice.

The Civil Rights Movement had been building throughout the 1950s and 1960s, with key events including the Montgomery Bus Boycott (1955), the Little Rock Nine (1957), the Greensboro sit-ins (1960), the Freedom Rides (1961), and the Birmingham campaign (1963). The movement employed nonviolent direct action inspired by Mahatma Gandhi.

The March on Washington helped build political momentum for the Civil Rights Act of 1964 and the Voting Rights Act of 1965. Despite these legislative victories, the struggle for racial equality continued. Martin Luther King Jr. was assassinated on April 4, 1968, in Memphis, Tennessee, but his legacy and the movement he led transformed American society.`
  },
  {
    id: 'civil-rights-act',
    date: '1964-07-02',
    title: 'Civil Rights Act of 1964',
    category: 'civil-rights',
    lat: 38.90, lng: -77.04,
    connections: ['civil-rights-movement'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Lyndon_Johnson_signing_Civil_Rights_Act%2C_July_2%2C_1964.jpg/640px-Lyndon_Johnson_signing_Civil_Rights_Act%2C_July_2%2C_1964.jpg',
    description: `The Civil Rights Act of 1964 was landmark legislation that outlawed discrimination based on race, color, religion, sex, or national origin in the United States. Signed by President Lyndon B. Johnson, the act prohibited unequal application of voter registration requirements, racial segregation in schools and public accommodations, and employment discrimination.

The act was the culmination of years of civil rights activism and was pushed through Congress in the aftermath of President Kennedy's assassination. It faced fierce opposition from Southern Democrats who mounted a 54-day filibuster in the Senate. The act passed with bipartisan support, with Republican votes proving crucial to overcoming the filibuster.

The Civil Rights Act of 1964 was one of the most consequential pieces of legislation in American history. It dismantled the legal framework of Jim Crow segregation and established the Equal Employment Opportunity Commission. Together with the Voting Rights Act of 1965, it fundamentally transformed American society and law.`
  },
  {
    id: 'vietnam-war',
    date: '1955-11-01',
    endDate: '1975-04-30',
    title: 'Vietnam War',
    category: 'war',
    lat: 10.82, lng: 106.63,
    connections: ['cold-war', 'communism-spread'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Hueys_at_Khe_Sanh.jpg/640px-Hueys_at_Khe_Sanh.jpg',
    description: `The Vietnam War (1955–1975) was a prolonged conflict between communist North Vietnam (supported by the Soviet Union and China) and South Vietnam (supported by the United States and other Western allies). U.S. involvement escalated dramatically after the Gulf of Tonkin incident in 1964, eventually deploying over 500,000 troops.

The war was characterized by guerrilla warfare, the extensive use of napalm and Agent Orange, and devastating bombing campaigns. The 1968 Tet Offensive, though a military defeat for North Vietnam, shocked the American public and turned opinion against the war. Massive anti-war protests erupted across the United States and the world.

The United States withdrew its forces in 1973, and Saigon fell to North Vietnamese forces on April 30, 1975, reunifying Vietnam under communist rule. The war killed an estimated 2–3 million Vietnamese, 1.5–2 million Laotians and Cambodians, and over 58,000 Americans. It fundamentally altered American foreign policy and public trust in government.`
  },
  {
    id: 'space-race',
    date: '1957-10-04',
    title: 'Space Race — Sputnik Launch',
    category: 'space-tech',
    lat: 45.92, lng: 63.34,
    connections: ['cold-war', 'moon-landing'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sputnik_asm.jpg/440px-Sputnik_asm.jpg',
    description: `The Space Race began in earnest on October 4, 1957, when the Soviet Union launched Sputnik 1, the world's first artificial satellite. The 184-pound sphere orbited Earth every 96 minutes, and its radio signal was detectable worldwide. The launch shocked the United States and triggered fears of Soviet technological superiority.

The Soviet Union achieved several early milestones: the first animal in orbit (Laika, 1957), the first human in space (Yuri Gagarin, 1961), and the first woman in space (Valentina Tereshkova, 1963). These achievements were propaganda victories for the communist system and spurred massive American investment in science education and space technology.

President Kennedy's 1961 declaration that America would land a man on the Moon by the end of the decade set the stage for NASA's Apollo program. The Space Race drove unprecedented advances in rocketry, computing, materials science, and telecommunications — technologies that would transform civilian life for decades to come.`
  },
  {
    id: 'moon-landing',
    date: '1969-07-20',
    title: 'Moon Landing — Apollo 11',
    category: 'space-tech',
    lat: 28.57, lng: -80.65,
    connections: ['space-race'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Aldrin_Apollo_11.jpg/440px-Aldrin_Apollo_11.jpg',
    description: `On July 20, 1969, American astronaut Neil Armstrong became the first human to walk on the Moon, declaring "That's one small step for man, one giant leap for mankind." Armstrong and Buzz Aldrin spent about two hours on the lunar surface while Michael Collins orbited above in the command module. An estimated 600 million people worldwide watched the event on television.

Apollo 11 was the culmination of NASA's Apollo program, which cost approximately $25 billion (about $200 billion in today's dollars) and employed over 400,000 people at its peak. The mission fulfilled President Kennedy's 1961 challenge and represented a decisive American victory in the Space Race with the Soviet Union.

The Moon landing remains one of humanity's greatest technological achievements. Five more successful Moon landings followed before the Apollo program ended in 1972. The achievement demonstrated the potential of human ingenuity and international cooperation, and the iconic photograph of Earth from the Moon — "Earthrise" — helped inspire the modern environmental movement.`
  },
  {
    id: 'decolonization-africa',
    date: '1960-01-01',
    title: 'African Independence Movements — Year of Africa',
    category: 'decolonization',
    lat: 6.52, lng: 3.38,
    connections: ['india-independence'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Patrice-Lumumba.jpg/440px-Patrice-Lumumba.jpg',
    description: `1960 is known as the "Year of Africa" because 17 African nations gained independence from European colonial powers that year. The decolonization wave that swept the continent from the late 1950s through the 1970s ended centuries of European imperial control and transformed the global political landscape.

Key independence movements included Ghana (1957, the first sub-Saharan African colony to gain independence under Kwame Nkrumah), Nigeria (1960), Congo (1960), Kenya (1963), and many others. Some transitions were peaceful, while others — particularly in Algeria, Kenya, Mozambique, and Angola — involved prolonged armed struggles against colonial rulers.

Decolonization brought enormous challenges: artificial colonial borders divided ethnic groups and united rivals, colonial economies had been structured for extraction rather than development, and many new nations faced political instability. Despite these obstacles, African independence movements represented a fundamental assertion of human dignity and self-determination that reshaped the international order.`
  },
  {
    id: 'oil-crisis',
    date: '1973-10-17',
    title: '1973 Oil Crisis',
    category: 'economic',
    lat: 24.71, lng: 46.67,
    connections: ['arab-israeli-wars'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/LINE_at_a_gas_station%2C_June_15_1979.jpg/640px-LINE_at_a_gas_station%2C_June_15_1979.jpg',
    description: `The 1973 Oil Crisis began when Arab members of OPEC proclaimed an oil embargo against nations supporting Israel during the Yom Kippur War. The embargo targeted the United States, Canada, Japan, the Netherlands, and the United Kingdom, causing oil prices to quadruple from $3 to $12 per barrel.

The crisis caused fuel shortages, long lines at gas stations, and severe economic disruption across the industrialized world. The U.S. government imposed fuel rationing and reduced speed limits to 55 mph. The crisis triggered a global recession and "stagflation" — the unprecedented combination of high inflation, high unemployment, and stagnant economic growth.

The oil crisis fundamentally changed the global economy and geopolitics. It demonstrated the political power of oil-producing nations, accelerated the search for alternative energy sources, prompted improvements in fuel efficiency, and revealed the vulnerability of Western economies to energy supply disruptions. A second oil crisis in 1979 reinforced these lessons.`
  },
  {
    id: 'cambodian-genocide',
    date: '1975-04-17',
    title: 'Cambodian Genocide',
    category: 'genocide',
    lat: 11.56, lng: 104.93,
    connections: ['vietnam-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tuol_Sleng_Genocide_Museum_-_Phnom_Penh_-_Cambodia.JPG/640px-Tuol_Sleng_Genocide_Museum_-_Phnom_Penh_-_Cambodia.JPG',
    description: `Between 1975 and 1979, the Khmer Rouge regime under Pol Pot carried out one of the most horrific genocides in history, killing an estimated 1.5 to 2 million Cambodians — roughly a quarter of the country's population. The regime sought to create an agrarian utopia by emptying cities and forcing the entire population into agricultural labor.

The Khmer Rouge targeted intellectuals, professionals, ethnic minorities (especially Vietnamese, Chinese, and Cham Muslims), and anyone perceived as a threat to the revolution. The infamous S-21 prison (Tuol Sleng) processed over 14,000 prisoners, of whom only 12 survived. Vast "killing fields" across the country were used for mass executions.

The genocide ended when Vietnam invaded Cambodia in December 1978, overthrowing the Khmer Rouge. However, it took decades for justice — the Extraordinary Chambers in the Courts of Cambodia (ECCC) was established in 2006, and the first conviction of a senior Khmer Rouge leader came in 2010.`
  },
  {
    id: 'apartheid',
    date: '1948-05-28',
    title: 'Apartheid in South Africa',
    category: 'civil-rights',
    lat: -33.93, lng: 18.42,
    connections: ['apartheid-end'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/ApartheidSignEnglishAfrikaans.jpg/440px-ApartheidSignEnglishAfrikaans.jpg',
    description: `Apartheid ("apartness" in Afrikaans) was a system of institutionalized racial segregation and discrimination in South Africa that was formalized into law by the National Party government beginning in 1948. The system classified all South Africans by race and determined where they could live, work, go to school, and whom they could marry.

Under apartheid, the white minority (about 20% of the population) controlled the government, economy, and security forces. Black South Africans were denied citizenship rights and confined to impoverished "homelands." Resistance movements, led primarily by the African National Congress (ANC) and leaders like Nelson Mandela, employed strikes, protests, and eventually armed resistance.

The Sharpeville Massacre of 1960, in which police killed 69 peaceful protesters, and the Soweto Uprising of 1976, drew international condemnation and strengthened anti-apartheid movements worldwide. International sanctions, divestment campaigns, and sustained internal resistance eventually forced the regime to negotiate its own end.`
  },
  {
    id: 'apartheid-end',
    date: '1994-04-27',
    title: 'End of Apartheid — Mandela Elected',
    category: 'civil-rights',
    lat: -33.93, lng: 18.42,
    connections: ['apartheid'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nelson_Mandela-2008_%28edit%29.jpg/440px-Nelson_Mandela-2008_%28edit%29.jpg',
    description: `On April 27, 1994, South Africa held its first fully democratic election open to all races. Nelson Mandela, who had spent 27 years in prison as a political prisoner, was elected president, marking the definitive end of apartheid and the beginning of a new era for South Africa.

The transition was the result of years of negotiations between the apartheid government under President F.W. de Klerk and the ANC. De Klerk had released Mandela in 1990 and lifted the ban on the ANC, beginning the process of dismantling apartheid laws. Both men shared the Nobel Peace Prize in 1993 for their efforts.

Mandela's presidency (1994–1999) focused on reconciliation rather than retribution. The Truth and Reconciliation Commission, chaired by Archbishop Desmond Tutu, investigated apartheid-era crimes and offered amnesty in exchange for honest testimony. The peaceful transition from apartheid to democracy remains one of the most remarkable political transformations of the 20th century.`
  },
  {
    id: 'iranian-revolution',
    date: '1979-02-11',
    title: 'Iranian Revolution',
    category: 'politics',
    lat: 35.70, lng: 51.42,
    connections: ['oil-crisis'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mass_demonstration_in_Iran%2C_date_unknown.jpg/640px-Mass_demonstration_in_Iran%2C_date_unknown.jpg',
    description: `The Iranian Revolution of 1979 overthrew the U.S.-backed Shah Mohammad Reza Pahlavi and established an Islamic Republic under Ayatollah Ruhollah Khomeini. The revolution was driven by diverse opposition groups — Islamists, leftists, liberals, and students — united against the Shah's authoritarian rule, corruption, and Western dependence.

Mass protests, strikes, and demonstrations paralyzed the country throughout 1978. The Shah fled Iran in January 1979, and Khomeini returned from exile in February to massive crowds. By April, a referendum established the Islamic Republic, and Khomeini became Supreme Leader, consolidating theocratic control.

The revolution transformed the Middle East and global politics. The subsequent Iran hostage crisis (444 days) devastated U.S.-Iranian relations. The revolution inspired Islamist movements worldwide, contributed to the Iran-Iraq War (1980–1988), and established a model of political Islam that continues to influence the region today.`
  },
  {
    id: 'chernobyl',
    date: '1986-04-26',
    title: 'Chernobyl Nuclear Disaster',
    category: 'nuclear',
    lat: 51.39, lng: 30.10,
    connections: ['ussr-collapse'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Chernobyl_2019_G03.jpg/640px-Chernobyl_2019_G03.jpg',
    description: `On April 26, 1986, Reactor No. 4 at the Chernobyl Nuclear Power Plant in Soviet Ukraine exploded during a safety test, releasing 400 times more radiation than the Hiroshima atomic bomb. The explosion and subsequent fire sent a plume of radioactive fallout across much of Europe, contaminating vast areas.

The disaster was caused by a combination of design flaws in the RBMK reactor and operator errors during the safety test. The Soviet government initially attempted to conceal the disaster, only acknowledging it after Swedish monitoring stations detected the radioactive cloud. Over 350,000 people were eventually evacuated from the surrounding area.

Chernobyl's long-term effects include thousands of cases of thyroid cancer, particularly among children exposed to radioactive iodine, and an exclusion zone that remains largely uninhabited. The disaster exposed the dysfunction of the Soviet system and contributed to the glasnost (openness) policies that ultimately led to the USSR's collapse. It remains the worst nuclear power plant disaster in history.`
  },
  {
    id: 'falklands-war',
    date: '1982-04-02',
    title: 'Falklands War',
    category: 'war',
    lat: -51.75, lng: -59.00,
    connections: [],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Royal_Marines_Falklands.jpg/640px-Royal_Marines_Falklands.jpg',
    description: `The Falklands War was a ten-week conflict between Argentina and the United Kingdom over the Falkland Islands (Islas Malvinas), a remote British territory in the South Atlantic. On April 2, 1982, Argentina's military junta invaded and occupied the islands, claiming sovereignty over the territory that had been under British control since 1833.

British Prime Minister Margaret Thatcher ordered a naval task force of 127 ships to retake the islands across 8,000 miles of ocean. Despite the logistical challenges, British forces recaptured the islands after fierce fighting, including the sinking of the Argentine cruiser General Belgrano and the British destroyer HMS Sheffield.

Argentina surrendered on June 14, 1982. The war killed 649 Argentine and 255 British military personnel. The defeat hastened the end of Argentina's military dictatorship, while the victory boosted Thatcher's political fortunes. The sovereignty dispute remains unresolved, with Argentina continuing to claim the islands.`
  },
  {
    id: 'hiv-aids',
    date: '1981-06-05',
    title: 'HIV/AIDS Pandemic',
    category: 'pandemic',
    lat: 34.05, lng: -118.24,
    connections: [],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AIDS_Quilt.jpg/640px-AIDS_Quilt.jpg',
    description: `The HIV/AIDS pandemic was first recognized on June 5, 1981, when the U.S. CDC reported unusual clusters of pneumonia and rare cancers among young gay men in Los Angeles. The virus was identified in 1983, and the disease spread rapidly across the world, becoming one of the deadliest pandemics in human history.

By the late 1980s, AIDS had become a global crisis. Initial government responses were slow, particularly under the Reagan administration, while stigma and discrimination against affected communities — especially gay men and intravenous drug users — hampered public health efforts. Activist organizations like ACT UP demanded action and accelerated research funding.

Since the pandemic began, approximately 40 million people have died from AIDS-related illnesses, and about 38 million people currently live with HIV. The development of antiretroviral therapy in the mid-1990s transformed HIV from a death sentence into a manageable chronic condition in countries with access to treatment. However, the pandemic continues to disproportionately affect sub-Saharan Africa and marginalized communities worldwide.`
  },
  {
    id: 'tiananmen',
    date: '1989-06-04',
    title: 'Tiananmen Square Massacre',
    category: 'politics',
    lat: 39.91, lng: 116.40,
    connections: ['berlin-wall-fall'],
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d8/Tiananmen_Square_protests.jpg',
    description: `On June 4, 1989, the Chinese government ordered the military to clear Tiananmen Square in Beijing, where pro-democracy protesters had been demonstrating for weeks. Troops and tanks moved through the city, firing on civilians. The death toll remains unknown — estimates range from several hundred to several thousand.

The protests had begun in April following the death of reformist leader Hu Yaobang and grew to include students, workers, and intellectuals demanding democratic reforms, freedom of the press, and an end to corruption. At their peak, over a million people occupied the square and surrounding streets. The iconic image of "Tank Man" — a lone figure blocking a column of tanks — became a global symbol of resistance.

The Chinese government declared martial law and crushed the movement, followed by widespread arrests and a campaign to erase the event from public memory. Discussion of the massacre remains heavily censored in China. The crackdown demonstrated that the Chinese Communist Party would use any means necessary to maintain power, setting the course for China's authoritarian model of economic development without political liberalization.`
  },
  {
    id: 'berlin-wall-fall',
    date: '1989-11-09',
    title: 'Fall of the Berlin Wall',
    category: 'politics',
    lat: 52.52, lng: 13.38,
    connections: ['cold-war', 'ussr-collapse'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg/640px-West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg',
    description: `On November 9, 1989, the Berlin Wall — the most powerful symbol of the Cold War division of Europe — was opened after 28 years. Thousands of jubilant East and West Berliners gathered at the wall, celebrating, embracing, and beginning to physically dismantle the barrier that had divided their city since 1961.

The wall's fall was precipitated by a series of events: Mikhail Gorbachev's reforms in the Soviet Union (glasnost and perestroika), mass protests across Eastern Europe, Hungary's opening of its border with Austria, and peaceful demonstrations in East German cities. A confused press conference by East German official Günter Schabowski, who prematurely announced the opening of borders, triggered the spontaneous gathering at the wall.

The fall of the Berlin Wall symbolized the end of the Cold War and triggered the rapid collapse of communist regimes across Eastern Europe. Germany was formally reunified on October 3, 1990. The event ushered in a period of optimism about democracy and freedom, though the challenges of reunification and post-communist transition proved far more complex than initially imagined.`
  },
  {
    id: 'ussr-collapse',
    date: '1991-12-26',
    title: 'Dissolution of the Soviet Union',
    category: 'politics',
    lat: 55.75, lng: 37.62,
    connections: ['berlin-wall-fall', 'cold-war', 'chernobyl'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/RIAN_archive_848095_Signing_the_Agreement_to_eliminate_the_USSR_and_establish_the_Commonwealth_of_Independent_States.jpg/640px-RIAN_archive_848095_Signing_the_Agreement_to_eliminate_the_USSR_and_establish_the_Commonwealth_of_Independent_States.jpg',
    description: `On December 26, 1991, the Soviet Union officially dissolved, ending the world's first communist state and the Cold War's defining superpower rivalry. The dissolution created 15 independent nations and marked the end of an era that had shaped global politics for seven decades.

The collapse was driven by multiple factors: Gorbachev's reforms (glasnost and perestroika) unleashed forces he couldn't control, the Soviet economy was stagnating under the burden of military spending and central planning, nationalist movements erupted in the Baltic states and other republics, and a failed coup attempt in August 1991 fatally weakened the central government.

The end of the Soviet Union left the United States as the sole superpower and prompted what many saw as the triumph of liberal democracy and capitalism. However, the post-Soviet transition was chaotic: economic collapse, oligarchic corruption, and political instability affected millions across the former Soviet space. The geopolitical consequences continue to reverberate, particularly in Russia's relationships with its former territories.`
  },
  {
    id: 'gulf-war',
    date: '1990-08-02',
    title: 'Gulf War',
    category: 'war',
    lat: 29.38, lng: 47.99,
    connections: ['iraq-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/USAF_F-16A_F-15C_F-15E_Desert_Storm_edit2.jpg/640px-USAF_F-16A_F-15C_F-15E_Desert_Storm_edit2.jpg',
    description: `The Gulf War began on August 2, 1990, when Iraq under Saddam Hussein invaded and annexed Kuwait. The United States led a coalition of 35 nations that launched Operation Desert Storm on January 17, 1991, beginning with a devastating air campaign followed by a ground offensive that liberated Kuwait in just 100 hours.

The war showcased precision-guided weapons, stealth technology, and 24-hour news coverage that brought the conflict into living rooms worldwide (the "CNN effect"). Coalition forces suffered remarkably few casualties compared to the Iraqi military, which lost an estimated 20,000–50,000 soldiers. However, Iraqi civilians suffered enormously from the bombing campaign and subsequent sanctions.

While the coalition achieved its stated objective of liberating Kuwait, Saddam Hussein remained in power — a fact that would have profound consequences. The continued presence of U.S. forces in Saudi Arabia, economic sanctions against Iraq, and the unresolved conflict would fuel anti-American sentiment in the Middle East and contribute to the rise of al-Qaeda and the events of September 11, 2001.`
  },
  {
    id: 'rwandan-genocide',
    date: '1994-04-07',
    title: 'Rwandan Genocide',
    category: 'genocide',
    lat: -1.94, lng: 29.87,
    connections: [],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Nyamata_Memorial_Site_13.jpg/640px-Nyamata_Memorial_Site_13.jpg',
    description: `Over approximately 100 days beginning April 7, 1994, Hutu extremists in Rwanda systematically murdered an estimated 800,000 to 1 million ethnic Tutsis and moderate Hutus. The genocide was triggered by the assassination of President Habyarimana but had been planned and organized for months through extremist propaganda and militia training.

The killing was carried out with shocking speed and brutality, primarily using machetes and clubs. Neighbor killed neighbor, and the génocidaires used radio broadcasts to coordinate and incite the violence. Churches, schools, and other supposed safe havens became killing grounds. Sexual violence was widespread, with an estimated 250,000–500,000 women raped.

The international community's failure to intervene remains one of the most shameful episodes in modern history. The United Nations reduced its peacekeeping force during the genocide, and major powers avoided using the word "genocide" to evade their obligations under the Genocide Convention. The Rwandan genocide exposed the emptiness of "Never Again" promises and led to reforms in international crisis response.`
  },
  {
    id: 'bosnian-genocide',
    date: '1995-07-11',
    title: 'Srebrenica Massacre — Bosnian Genocide',
    category: 'genocide',
    lat: 44.11, lng: 19.30,
    connections: ['yugoslav-wars'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Srebrenica_Genocide_Memorial.jpg/640px-Srebrenica_Genocide_Memorial.jpg',
    description: `The Srebrenica massacre of July 1995 was the worst act of genocide in Europe since the Holocaust. Bosnian Serb forces under General Ratko Mladić systematically executed more than 8,000 Bosniak (Bosnian Muslim) men and boys in and around the town of Srebrenica, which the United Nations had declared a "safe area."

The massacre occurred during the Bosnian War (1992–1995), part of the broader Yugoslav Wars that followed the dissolution of Yugoslavia. Despite the presence of Dutch UN peacekeepers, Serb forces overran the enclave and separated military-age men from women and children. Over the following days, the men were taken to multiple execution sites and killed.

The Srebrenica massacre was classified as genocide by the International Criminal Tribunal for the former Yugoslavia (ICTY) and the International Court of Justice. Mladić and political leader Radovan Karadžić were eventually convicted of genocide. The failure to protect Srebrenica's inhabitants remains one of the UN's most significant failures.`
  },
  {
    id: 'yugoslav-wars',
    date: '1991-06-25',
    title: 'Yugoslav Wars',
    category: 'war',
    lat: 43.86, lng: 18.43,
    connections: ['bosnian-genocide', 'ussr-collapse'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Evstafiev-sarajevo-building-burns.jpg/440px-Evstafiev-sarajevo-building-burns.jpg',
    description: `The Yugoslav Wars (1991–2001) were a series of ethnic conflicts and wars of independence that accompanied the dissolution of Yugoslavia. The wars included the Slovenian War (1991), Croatian War (1991–1995), Bosnian War (1992–1995), and Kosovo War (1998–1999), causing approximately 140,000 deaths and displacing over 4 million people.

The conflicts were driven by a toxic combination of nationalism, ethnic tensions, economic crisis, and the political ambitions of leaders like Slobodan Milošević. "Ethnic cleansing" — the forced removal or killing of ethnic groups — became the defining horror of these wars, particularly in Bosnia, where Serb forces targeted Bosniak and Croat civilians.

The wars led to NATO's first military action (bombing Serbia in 1999 to stop the ethnic cleansing of Kosovo Albanians), the establishment of the ICTY, and ultimately the creation of several new nations. The Siege of Sarajevo (1992–1996) — the longest siege of a capital city in modern warfare — and the Srebrenica massacre shocked the world and exposed Europe's failure to prevent conflict on its own continent.`
  },
  {
    id: 'internet-age',
    date: '1991-08-06',
    title: 'World Wide Web Goes Public',
    category: 'space-tech',
    lat: 46.23, lng: 6.05,
    connections: [],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/First_Web_Server.jpg/640px-First_Web_Server.jpg',
    description: `On August 6, 1991, Tim Berners-Lee published the first website from CERN in Switzerland, making the World Wide Web publicly available. Berners-Lee had invented the Web in 1989 as a way for scientists to share information, combining hypertext, the internet, and a system of URLs, HTTP, and HTML.

The Web grew exponentially through the 1990s, fueled by the development of graphical browsers (Mosaic, Netscape), search engines (Yahoo, Google), and the dot-com boom. E-commerce (Amazon, eBay), email, and social networking transformed communication, commerce, and culture. The internet went from serving 16 million users in 1995 to over 400 million by 2000.

The World Wide Web became perhaps the most transformative technology since the printing press. It democratized access to information, created entirely new industries, enabled global communication, and reshaped virtually every aspect of modern life. However, it also brought challenges including digital divides, privacy concerns, misinformation, and new forms of surveillance and control.`
  },
  {
    id: 'sept-11',
    date: '2001-09-11',
    title: 'September 11 Attacks',
    category: 'terrorism',
    lat: 40.71, lng: -74.01,
    connections: ['war-on-terror', 'iraq-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/September_17_2001.jpg/440px-September_17_2001.jpg',
    description: `On September 11, 2001, 19 al-Qaeda terrorists hijacked four commercial airliners. Two were flown into the Twin Towers of the World Trade Center in New York City, one into the Pentagon near Washington, D.C., and the fourth, United Flight 93, crashed into a field in Pennsylvania after passengers attempted to retake control. Nearly 3,000 people were killed.

The attacks were planned by Osama bin Laden and motivated by opposition to American military presence in Saudi Arabia, U.S. support for Israel, and sanctions against Iraq. The collapse of the Twin Towers was broadcast live on television worldwide, creating indelible images that defined a generation. The attacks represented the deadliest terrorist event in history.

September 11 fundamentally transformed American domestic and foreign policy. The U.S. launched the "War on Terror," invaded Afghanistan, created the Department of Homeland Security, and passed the Patriot Act expanding surveillance powers. The attacks reshaped airport security, intelligence gathering, civil liberties debates, and American attitudes toward the Muslim world, with consequences that continue to unfold.`
  },
  {
    id: 'war-on-terror',
    date: '2001-10-07',
    title: 'War on Terror — Invasion of Afghanistan',
    category: 'war',
    lat: 34.53, lng: 69.17,
    connections: ['sept-11', 'iraq-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/US_10th_Mountain_Division_soldiers_in_Afghanistan.jpg/640px-US_10th_Mountain_Division_soldiers_in_Afghanistan.jpg',
    description: `On October 7, 2001, the United States and allies launched Operation Enduring Freedom, invading Afghanistan to destroy al-Qaeda and remove the Taliban government that had harbored Osama bin Laden. The Taliban regime fell quickly, but the conflict evolved into America's longest war, lasting until the chaotic withdrawal in August 2021.

The war initially succeeded in toppling the Taliban and disrupting al-Qaeda, but nation-building efforts faced enormous challenges. A democratic government was established, but corruption, weak institutions, and Taliban resilience undermined stability. The insurgency grew through the 2000s despite troop surges. Osama bin Laden was killed by U.S. special forces in Pakistan in May 2011.

After 20 years, $2 trillion in spending, and over 170,000 deaths (including 47,000 Afghan civilians and 2,400 American military), the U.S. withdrew in August 2021. The Taliban quickly retook control of the country, raising profound questions about the war's purpose and legacy, particularly for Afghan women and minorities who had gained rights under the democratic government.`
  },
  {
    id: 'iraq-war',
    date: '2003-03-20',
    title: 'Iraq War',
    category: 'war',
    lat: 33.31, lng: 44.37,
    connections: ['sept-11', 'gulf-war', 'syrian-civil-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Iraq_War_montage.png/440px-Iraq_War_montage.png',
    description: `On March 20, 2003, a U.S.-led coalition invaded Iraq, claiming that Saddam Hussein possessed weapons of mass destruction (WMDs) and had links to al-Qaeda. Neither claim proved true. The invasion toppled Saddam's regime within weeks, but the subsequent occupation and insurgency would last for years and cost hundreds of thousands of lives.

The war was deeply controversial from the start. Massive global protests preceded the invasion, and the failure to find WMDs severely damaged American credibility. The occupation was plagued by inadequate planning, the dissolution of the Iraqi army (which fueled the insurgency), sectarian violence, and the Abu Ghraib prisoner abuse scandal.

The Iraq War caused an estimated 200,000–600,000 Iraqi civilian deaths, displaced millions, and cost the United States over $2 trillion. It destabilized the entire region, contributed to the rise of ISIS, and strengthened Iran's regional influence. The war is widely regarded as one of the most consequential foreign policy mistakes in American history.`
  },
  {
    id: 'financial-crisis-2008',
    date: '2008-09-15',
    title: '2008 Global Financial Crisis',
    category: 'economic',
    lat: 40.71, lng: -74.01,
    connections: ['great-depression'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Lehman_Brothers_Times_Square_by_David_Shankbone.jpg/440px-Lehman_Brothers_Times_Square_by_David_Shankbone.jpg',
    description: `The 2008 financial crisis, the worst since the Great Depression, was triggered by the collapse of the U.S. housing bubble and the failure of major financial institutions. On September 15, 2008, the bankruptcy of Lehman Brothers — the largest in U.S. history — sent shockwaves through the global financial system.

The crisis was caused by reckless lending practices, complex derivative securities (particularly mortgage-backed securities and credit default swaps), inadequate regulation, and pervasive conflicts of interest in the financial industry. When housing prices fell, the value of these securities collapsed, threatening the solvency of banks worldwide.

Governments responded with massive bailouts, stimulus packages, and unprecedented monetary policy. The U.S. government's $700 billion Troubled Asset Relief Program (TARP) and the Federal Reserve's near-zero interest rates prevented a complete economic collapse. Nevertheless, the crisis caused millions of foreclosures, wiped out trillions in wealth, and led to the worst recession since the 1930s. The perceived unfairness of bailing out banks while ordinary people suffered fueled populist movements on both the left and right.`
  },
  {
    id: 'arab-spring',
    date: '2010-12-17',
    title: 'Arab Spring',
    category: 'politics',
    lat: 34.74, lng: 10.76,
    connections: ['syrian-civil-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tahrir_Square_on_February_8_2011.png/640px-Tahrir_Square_on_February_8_2011.png',
    description: `The Arab Spring began on December 17, 2010, when Tunisian street vendor Mohamed Bouazizi set himself on fire to protest government corruption and police harassment. His act sparked a wave of protests and revolutions across the Arab world that toppled long-standing authoritarian regimes in Tunisia, Egypt, Libya, and Yemen.

Mass demonstrations, fueled by social media and frustrations with corruption, unemployment, and political repression, spread rapidly. In Egypt, millions gathered in Cairo's Tahrir Square, forcing President Hosni Mubarak to resign after 30 years in power. In Libya, protests evolved into a civil war that ended with the overthrow and killing of Muammar Gaddafi.

While the Arab Spring raised hopes for democratic transformation, the outcomes were largely disappointing. Tunisia was the only country to achieve a lasting democratic transition (until 2021). Egypt saw a brief democratic period before a military coup. Libya, Syria, and Yemen descended into civil wars. The upheaval reshaped the Middle East and demonstrated both the power and limitations of popular movements for political change.`
  },
  {
    id: 'syrian-civil-war',
    date: '2011-03-15',
    title: 'Syrian Civil War',
    category: 'war',
    lat: 33.51, lng: 36.29,
    connections: ['arab-spring', 'iraq-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Azaz%2C_Syria.jpg/640px-Azaz%2C_Syria.jpg',
    description: `The Syrian Civil War began in March 2011 when the Assad regime violently suppressed peaceful Arab Spring protests. The conflict rapidly escalated into a multi-sided civil war involving the Syrian government (backed by Russia and Iran), various rebel groups, Kurdish forces, and ISIS, with involvement from the United States, Turkey, and numerous other nations.

The war produced catastrophic humanitarian consequences: over 500,000 killed, more than 6 million internally displaced, and over 6 million refugees who fled to neighboring countries and Europe, triggering a migration crisis that reshaped European politics. Chemical weapons attacks, including the 2013 attack on Ghouta, drew international condemnation.

The Assad regime, with crucial military support from Russia (beginning in 2015) and Iran-backed militias, gradually reclaimed most territory from rebel forces. The war exposed the limitations of international institutions, raised complex questions about intervention, and fundamentally altered the political landscape of the Middle East and Europe. Assad was ultimately overthrown in December 2024.`
  },
  {
    id: 'brexit',
    date: '2016-06-23',
    title: 'Brexit Referendum',
    category: 'politics',
    lat: 51.51, lng: -0.13,
    connections: [],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Brexit_protest.jpg/640px-Brexit_protest.jpg',
    description: `On June 23, 2016, the United Kingdom voted 52% to 48% to leave the European Union in a referendum that shocked the world. The "Leave" campaign, led by figures including Boris Johnson and Nigel Farage, argued for national sovereignty, immigration control, and an end to EU regulations. The "Remain" campaign warned of economic damage and diminished global influence.

The referendum exposed deep divisions in British society along lines of age, education, geography, and cultural attitudes. Young, urban, educated voters overwhelmingly favored Remain, while older, rural voters favored Leave. The campaign was marked by controversies including the misleading claim that EU membership cost £350 million per week.

Brexit was formally completed on January 31, 2020, after years of contentious negotiations and political turmoil that brought down two prime ministers. The economic impact has included trade disruptions, reduced foreign investment, and labor shortages in key sectors. Brexit inspired populist and Eurosceptic movements across Europe and raised fundamental questions about globalization, national identity, and democratic decision-making.`
  },
  {
    id: 'covid-19',
    date: '2020-03-11',
    title: 'COVID-19 Pandemic',
    category: 'pandemic',
    lat: 30.59, lng: 114.31,
    connections: ['spanish-flu'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Covid-19_SP4.jpg/640px-Covid-19_SP4.jpg',
    description: `The COVID-19 pandemic, caused by the SARS-CoV-2 coronavirus first identified in Wuhan, China in late 2019, became the most significant global health crisis in a century. The WHO declared it a pandemic on March 11, 2020. The virus spread rapidly across the world, overwhelming healthcare systems and triggering unprecedented lockdowns affecting billions of people.

The pandemic's impact extended far beyond health. Global economies contracted sharply, with the worst recession since the Great Depression. Schools closed, businesses shuttered, and remote work became the norm for millions. Supply chain disruptions, inflation, and uneven economic recovery created lasting economic challenges. Social isolation, anxiety, and grief took an enormous toll on mental health.

Vaccines were developed with unprecedented speed — the first mRNA vaccines (Pfizer-BioNTech and Moderna) received emergency authorization within a year of the virus's identification. However, vaccine distribution was deeply unequal between wealthy and developing nations. As of 2025, COVID-19 has killed over 7 million people officially, with the true toll estimated much higher, and its social, economic, and political consequences continue to unfold.`
  },
  {
    id: 'ukraine-russia',
    date: '2022-02-24',
    title: 'Russia Invades Ukraine',
    category: 'war',
    lat: 50.45, lng: 30.52,
    connections: ['ussr-collapse', 'cold-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kyiv_after_Russian_shelling%2C_24_February_2022.jpg/640px-Kyiv_after_Russian_shelling%2C_24_February_2022.jpg',
    description: `On February 24, 2022, Russia launched a full-scale invasion of Ukraine, the largest military attack in Europe since World War II. President Vladimir Putin claimed the invasion was necessary to "denazify" Ukraine and prevent NATO expansion, though the true motivations included reasserting Russian imperial influence and preventing a democratic, Western-oriented Ukraine on Russia's border.

The invasion was expected by many to result in a quick Russian victory, but Ukrainian forces, led by President Volodymyr Zelenskyy, mounted a fierce resistance that stalled the advance on Kyiv within weeks. Western nations imposed unprecedented economic sanctions on Russia and provided substantial military aid to Ukraine, including advanced weapons systems.

The war has caused tens of thousands of casualties, displaced millions of Ukrainians, triggered a global energy and food crisis, and fundamentally reshaped European security. It led to Finland and Sweden joining NATO, a dramatic increase in European defense spending, and a reassessment of the post-Cold War security order. As of 2025, the conflict continues with no resolution in sight.`
  },
  // Additional events to reach 100+
  {
    id: 'wright-brothers',
    date: '1903-12-17',
    title: 'First Powered Flight',
    category: 'space-tech',
    lat: 36.01, lng: -75.67,
    connections: [],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/First_flight2.jpg/640px-First_flight2.jpg',
    description: `On December 17, 1903, Orville and Wilbur Wright achieved the first sustained, controlled, powered heavier-than-air flight at Kitty Hawk, North Carolina. The first flight lasted just 12 seconds and covered 120 feet. By the fourth flight that day, Wilbur flew 852 feet in 59 seconds.

The Wright brothers succeeded where others failed through systematic experimentation with wing shapes, wind tunnel testing, and the development of a three-axis control system. Their aircraft, the Wright Flyer, weighed 605 pounds and was powered by a custom-built 12-horsepower gasoline engine.

Powered flight would transform the 20th century — enabling global travel, reshaping warfare, connecting cultures, and shrinking the world. Within just 66 years of the Wright brothers' first flight, humans would walk on the Moon.`
  },
  {
    id: 'titanic',
    date: '1912-04-15',
    title: 'Sinking of the Titanic',
    category: 'economic',
    lat: 41.73, lng: -49.95,
    connections: [],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/RMS_Titanic_3.jpg/640px-RMS_Titanic_3.jpg',
    description: `On April 15, 1912, the RMS Titanic sank in the North Atlantic after striking an iceberg during her maiden voyage from Southampton to New York. Of the approximately 2,224 passengers and crew aboard, more than 1,500 died, making it one of the deadliest peacetime maritime disasters in history.

The Titanic was the largest ship afloat at the time and was widely considered "unsinkable" due to her advanced safety features. However, the ship carried insufficient lifeboats for all passengers, and the evacuation was chaotic. Class distinctions were starkly evident — a far higher proportion of first-class passengers survived compared to those in third class.

The disaster led to major improvements in maritime safety, including the International Convention for the Safety of Life at Sea (SOLAS), requirements for sufficient lifeboats, 24-hour radio watch on ships, and the establishment of the International Ice Patrol. The Titanic became a powerful symbol of human hubris and the limits of technology.`
  },
  {
    id: 'balfour-declaration',
    date: '1917-11-02',
    title: 'Balfour Declaration',
    category: 'politics',
    lat: 51.51, lng: -0.13,
    connections: ['israel-creation'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Balfour_declaration_unmarked.jpg/440px-Balfour_declaration_unmarked.jpg',
    description: `The Balfour Declaration of November 2, 1917, was a public statement by the British government expressing support for "the establishment in Palestine of a national home for the Jewish people." Issued as a letter from Foreign Secretary Arthur Balfour to Lord Rothschild, it became a foundational document of the Zionist movement.

The declaration was motivated by multiple factors: sympathy for Zionist aspirations, strategic interest in gaining Jewish support for the Allied war effort during WWI, and British imperial designs on the Middle East. Critically, it included the caveat that "nothing shall be done which may prejudice the civil and religious rights of existing non-Jewish communities in Palestine."

The Balfour Declaration set in motion the political process that would lead to the creation of Israel in 1948. Palestinians and Arab nations viewed it as a betrayal — a European power promising Arab land to a third party. The tensions it created between Jewish and Palestinian aspirations for self-determination remain at the heart of the Israeli-Palestinian conflict over a century later.`
  },
  {
    id: 'league-nations',
    date: '1920-01-10',
    title: 'League of Nations Founded',
    category: 'politics',
    lat: 46.23, lng: 6.15,
    connections: ['treaty-versailles', 'united-nations'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Bundesarchiv_Bild_183-R01213%2C_Genf%2C_V%C3%B6lkerbundssitzung.jpg/640px-Bundesarchiv_Bild_183-R01213%2C_Genf%2C_V%C3%B6lkerbundssitzung.jpg',
    description: `The League of Nations, the first worldwide intergovernmental organization aimed at maintaining world peace, began operations on January 10, 1920. It was conceived during World War I and established by the Treaty of Versailles, largely at the initiative of U.S. President Woodrow Wilson.

Ironically, the United States never joined due to Senate opposition, severely weakening the organization. At its height, the League had 58 member states and achieved some successes in resolving minor international disputes, combating disease and slavery, and protecting refugees.

However, the League proved powerless to prevent aggression by major powers. It failed to stop Japan's invasion of Manchuria (1931), Italy's conquest of Ethiopia (1935), and Germany's territorial expansion. These failures discredited the organization and demonstrated the need for a stronger international body with enforcement mechanisms, leading to the creation of the United Nations after World War II.`
  },
  {
    id: 'gandhi-salt-march',
    date: '1930-03-12',
    title: "Gandhi's Salt March",
    category: 'civil-rights',
    lat: 23.03, lng: 72.58,
    connections: ['india-independence'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Salt_March.jpg/440px-Salt_March.jpg',
    description: `On March 12, 1930, Mahatma Gandhi began a 240-mile march from his ashram in Sabarmati to the coastal village of Dandi to protest the British salt tax. Over 24 days, thousands joined the march, and when Gandhi symbolically picked up a handful of natural salt on April 6, it marked one of the most significant acts of civil disobedience in history.

The Salt March was a masterful act of political theater. The British salt monopoly affected every Indian, making it a perfect symbol of colonial oppression. The nonviolent protest drew worldwide attention and inspired millions of Indians to join the civil disobedience movement, leading to the arrest of over 60,000 people.

The march demonstrated the power of nonviolent resistance and significantly weakened British authority in India. It elevated Gandhi to international prominence and established the template for nonviolent protest movements worldwide, influencing Martin Luther King Jr., Nelson Mandela, and countless other leaders in their struggles for justice.`
  },
  {
    id: 'pearl-harbor-aftermath',
    date: '1942-02-19',
    title: 'Japanese-American Internment',
    category: 'civil-rights',
    lat: 37.77, lng: -122.42,
    connections: ['wwii-pacific'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Posted_Japanese_American_Exclusion_Order.jpg/440px-Posted_Japanese_American_Exclusion_Order.jpg',
    description: `On February 19, 1942, President Roosevelt signed Executive Order 9066, authorizing the forced relocation and incarceration of approximately 120,000 Japanese Americans — two-thirds of whom were U.S. citizens — from the West Coast to remote internment camps. The order was motivated by wartime hysteria, racial prejudice, and failed political leadership.

Families were given just days to dispose of homes, businesses, and possessions before being transported to hastily constructed camps in desolate locations. Conditions were harsh: families lived in cramped barracks behind barbed wire and under armed guard. Despite this injustice, thousands of Japanese Americans served with distinction in the U.S. military during the war.

In 1988, President Reagan signed the Civil Liberties Act, officially apologizing and providing $20,000 in reparations to each surviving internee. The internment stands as one of the gravest violations of civil liberties in American history and serves as a cautionary tale about the dangers of racism and fear during wartime.`
  },
  {
    id: 'nato-expansion',
    date: '1999-03-12',
    title: 'NATO Expansion Eastward',
    category: 'politics',
    lat: 50.08, lng: 14.44,
    connections: ['nato-formation', 'berlin-wall-fall', 'ukraine-russia'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_NATO.svg/640px-Flag_of_NATO.svg.png',
    description: `On March 12, 1999, Poland, Hungary, and the Czech Republic formally joined NATO, marking the alliance's first expansion into former Warsaw Pact territory. This was followed by further rounds of enlargement in 2004 (including the Baltic states), 2009, 2017, 2020, 2023 (Finland), and 2024 (Sweden).

NATO expansion was controversial from the start. Proponents argued it extended stability and democracy eastward and that sovereign nations had the right to choose their alliances. Critics, including many Western strategists, warned it would provoke Russia and undermine post-Cold War cooperation. George Kennan, the architect of containment, called it "the most fateful error of American policy in the entire post-Cold War era."

Russian leaders consistently objected to NATO expansion, viewing it as a threat to their security. The issue became a central Russian grievance and a stated justification for the 2022 invasion of Ukraine, though Russia's motivations extended far beyond NATO to include imperial ambitions and opposition to Ukrainian democracy.`
  },
  {
    id: 'eu-formation',
    date: '1993-11-01',
    title: 'European Union Established',
    category: 'politics',
    lat: 50.85, lng: 4.35,
    connections: ['marshall-plan', 'berlin-wall-fall', 'brexit'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/640px-Flag_of_Europe.svg.png',
    description: `The European Union was formally established on November 1, 1993, when the Maastricht Treaty came into force. The EU built upon decades of European integration, beginning with the European Coal and Steel Community (1951) and the European Economic Community (1957), gradually expanding economic cooperation into political union.

The Maastricht Treaty created European citizenship, laid the groundwork for a common currency (the euro, introduced in 1999), and established cooperation in foreign and security policy. The EU expanded from 12 members in 1993 to 28 by 2013, encompassing most of the continent and creating the world's largest single market.

The EU represents the most ambitious experiment in international governance in history, transforming a continent that had been devastated by two world wars into a zone of peace and prosperity. However, it has faced significant challenges including the eurozone debt crisis, the migration crisis, democratic deficits, and Brexit, which saw the UK leave in 2020.`
  },
  {
    id: 'nelson-mandela-prison',
    date: '1964-06-12',
    title: 'Nelson Mandela Sentenced to Life',
    category: 'civil-rights',
    lat: -33.92, lng: 18.37,
    connections: ['apartheid', 'apartheid-end'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Nelson_Mandela%2C_2000_%285%29.jpg/440px-Nelson_Mandela%2C_2000_%285%29.jpg',
    description: `On June 12, 1964, Nelson Mandela was sentenced to life imprisonment at the Rivonia Trial for sabotage and conspiracy to overthrow the apartheid government. His statement from the dock — "an ideal for which I am prepared to die" — became one of the most powerful speeches in the struggle against racial injustice.

Mandela would spend 27 years in prison, 18 of them on Robben Island under harsh conditions. Despite imprisonment, he became the world's most famous political prisoner and the preeminent symbol of the anti-apartheid struggle. International campaigns demanding his release grew throughout the 1980s.

Mandela's release on February 11, 1990, was watched by millions worldwide and set the stage for the negotiated end of apartheid. His ability to emerge from decades of imprisonment without bitterness and to pursue reconciliation rather than revenge made him one of the most admired leaders in history.`
  },
  {
    id: 'kennedy-assassination',
    date: '1963-11-22',
    title: 'Assassination of JFK',
    category: 'politics',
    lat: 32.78, lng: -96.81,
    connections: ['cuban-missile-crisis', 'civil-rights-movement'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/440px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg',
    description: `President John F. Kennedy was assassinated on November 22, 1963, while riding in a motorcade through Dealey Plaza in Dallas, Texas. He was struck by two bullets and pronounced dead at Parkland Memorial Hospital at the age of 46. Vice President Lyndon B. Johnson was sworn in as president aboard Air Force One.

Lee Harvey Oswald was arrested and charged with the assassination, but was himself murdered two days later by nightclub owner Jack Ruby while being transferred by police. The Warren Commission concluded that Oswald acted alone, but conspiracy theories have persisted for decades, fueled by inconsistencies in evidence and the geopolitical context of the Cold War.

Kennedy's assassination traumatized the nation and marked a loss of innocence in American political life. His death helped propel landmark legislation including the Civil Rights Act of 1964 and the Voting Rights Act of 1965, which his successor Lyndon Johnson pushed through Congress partly as a tribute to Kennedy's legacy.`
  },
  {
    id: 'cuban-bay-pigs',
    date: '1961-04-17',
    title: 'Bay of Pigs Invasion',
    category: 'war',
    lat: 22.08, lng: -81.15,
    connections: ['cuban-revolution', 'cuban-missile-crisis'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Bay_of_Pigs_Invasion_map.png/440px-Bay_of_Pigs_Invasion_map.png',
    description: `On April 17, 1961, approximately 1,400 Cuban exiles, trained and funded by the CIA, landed at the Bay of Pigs in Cuba in an attempt to overthrow Fidel Castro's government. The invasion was a spectacular failure — within three days, Cuban forces had killed 114 invaders and captured 1,189.

The operation, planned under Eisenhower and authorized by Kennedy, was plagued by poor intelligence, logistical failures, and the decision to cancel planned air support. Castro had been warned of the invasion, and the Cuban military was well-prepared. The captured exiles were eventually ransomed for $53 million in food and medicine.

The Bay of Pigs was a humiliating defeat for the United States and a propaganda victory for Castro, strengthening his position domestically and pushing Cuba closer to the Soviet Union. The debacle directly contributed to the Cuban Missile Crisis 18 months later, as the Soviets sought to protect Cuba from future American invasion attempts.`
  },
  {
    id: 'berlin-wall-built',
    date: '1961-08-13',
    title: 'Berlin Wall Built',
    category: 'politics',
    lat: 52.52, lng: 13.38,
    connections: ['cold-war', 'berlin-wall-fall'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Berlinermauer.jpg/640px-Berlinermauer.jpg',
    description: `On August 13, 1961, East German authorities began constructing a barrier dividing East and West Berlin. What started as barbed wire quickly evolved into a heavily fortified concrete wall with guard towers, minefields, and a "death strip." The wall physically divided families, friends, and a city for 28 years.

The wall was built to stop the mass emigration of East Germans to the West — approximately 3.5 million had fled since 1945, draining the communist state of its workforce and professionals. The wall became the most visible symbol of the Iron Curtain and the Cold War division of Europe.

At least 140 people were killed trying to cross the Berlin Wall. Their stories of desperate escape attempts — through tunnels, over walls, in hot air balloons — became powerful symbols of the human desire for freedom. The wall stood until November 9, 1989, when it was opened in a moment that symbolized the end of the Cold War.`
  },
  {
    id: 'watergate',
    date: '1972-06-17',
    title: 'Watergate Scandal',
    category: 'politics',
    lat: 38.90, lng: -77.05,
    connections: ['vietnam-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Watergate_complex.jpg/640px-Watergate_complex.jpg',
    description: `The Watergate scandal began with the arrest of five men for breaking into the Democratic National Committee headquarters at the Watergate complex in Washington, D.C., on June 17, 1972. The subsequent investigation revealed a massive campaign of political espionage and sabotage conducted by or on behalf of President Richard Nixon's reelection campaign.

Washington Post reporters Bob Woodward and Carl Bernstein, guided by the anonymous source "Deep Throat" (later revealed as FBI Associate Director Mark Felt), uncovered the extent of the conspiracy. Senate hearings, the discovery of Nixon's secret White House taping system, and the Supreme Court's order to release the tapes exposed obstruction of justice at the highest levels.

Facing certain impeachment, Nixon resigned on August 9, 1974 — the only U.S. president to do so. Watergate profoundly eroded public trust in government, strengthened investigative journalism, and led to campaign finance reforms. The suffix "-gate" has since been applied to countless political scandals worldwide.`
  },
  {
    id: 'camp-david',
    date: '1978-09-17',
    title: 'Camp David Accords',
    category: 'politics',
    lat: 39.65, lng: -77.46,
    connections: ['arab-israeli-wars', 'israel-creation'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Begin%2C_Carter_and_Sadat_at_Camp_David_1978.jpg/640px-Begin%2C_Carter_and_Sadat_at_Camp_David_1978.jpg',
    description: `The Camp David Accords, signed on September 17, 1978, were groundbreaking agreements between Egyptian President Anwar Sadat and Israeli Prime Minister Menachem Begin, brokered by U.S. President Jimmy Carter after 12 days of secret negotiations at Camp David. They led to the first peace treaty between Israel and an Arab state.

The accords established a framework for peace in the Middle East and led to the Egypt-Israel Peace Treaty of 1979, in which Israel returned the Sinai Peninsula to Egypt in exchange for full diplomatic recognition. Both Sadat and Begin received the Nobel Peace Prize for their efforts.

However, the accords came at a steep cost. Sadat was assassinated by Islamic extremists in 1981, partly in retribution for making peace with Israel. Egypt was suspended from the Arab League for a decade. While the Egypt-Israel peace has endured, the broader framework for Palestinian self-governance envisioned in the accords was never implemented.`
  },
  {
    id: 'iran-iraq-war',
    date: '1980-09-22',
    title: 'Iran-Iraq War',
    category: 'war',
    lat: 30.50, lng: 47.78,
    connections: ['iranian-revolution', 'gulf-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Iranian_soldier_gas_mask.jpg/440px-Iranian_soldier_gas_mask.jpg',
    description: `The Iran-Iraq War (1980–1988) was one of the longest and bloodiest conventional wars of the 20th century. Iraq, under Saddam Hussein, invaded Iran on September 22, 1980, seeking to take advantage of post-revolutionary chaos and to assert dominance over the strategic Shatt al-Arab waterway.

The war quickly devolved into trench warfare reminiscent of World War I, with both sides using human-wave attacks. Iraq employed chemical weapons extensively, including mustard gas and nerve agents, both against Iranian forces and against Iraqi Kurdish civilians in the Halabja massacre (1988). An estimated 500,000 to 1.5 million people were killed.

The war ended in a UN-brokered ceasefire in 1988 with no significant territorial changes — Khomeini described accepting the ceasefire as "drinking a cup of poison." The conflict had devastating economic consequences for both nations and left Iraq with massive debts, contributing to Saddam's decision to invade Kuwait in 1990.`
  },
  {
    id: 'challenger',
    date: '1986-01-28',
    title: 'Space Shuttle Challenger Disaster',
    category: 'space-tech',
    lat: 28.57, lng: -80.65,
    connections: ['space-race'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Challenger_explosion.jpg/440px-Challenger_explosion.jpg',
    description: `On January 28, 1986, the Space Shuttle Challenger broke apart 73 seconds after launch, killing all seven crew members, including schoolteacher Christa McAuliffe, who would have been the first teacher in space. The disaster was watched live on television by millions, including schoolchildren across America.

The Rogers Commission investigation revealed that the failure was caused by an O-ring seal in the right solid rocket booster, which failed to function properly in the cold temperatures on launch morning. Engineers at Morton Thiokol had warned against launching in cold weather, but management overruled their concerns — a failure of organizational culture and decision-making.

The Challenger disaster profoundly affected NASA and the American space program. The shuttle fleet was grounded for nearly three years. The tragedy demonstrated the risks inherent in human spaceflight and led to significant safety reforms, though similar institutional failures would contribute to the Columbia disaster in 2003.`
  },
  {
    id: 'intifada',
    date: '1987-12-08',
    title: 'First Palestinian Intifada',
    category: 'war',
    lat: 31.50, lng: 34.47,
    connections: ['arab-israeli-wars', 'israel-creation'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Intifada.jpg/440px-Intifada.jpg',
    description: `The First Intifada ("shaking off") began on December 8, 1987, as a spontaneous uprising by Palestinians in the West Bank and Gaza Strip against Israeli military occupation. Triggered by an incident at a checkpoint, the revolt quickly spread across the occupied territories.

The uprising was characterized by civil disobedience, strikes, boycotts of Israeli products, and stone-throwing by Palestinian youth against Israeli soldiers — images that drew worldwide attention. Israel's response included mass arrests, deportations, house demolitions, and the use of live ammunition. Over six years, approximately 1,100 Palestinians and 160 Israelis were killed.

The Intifada internationalized the Palestinian cause and demonstrated that the status quo of occupation was unsustainable. It led to the rise of Hamas, strengthened Palestinian national identity, and eventually contributed to the Oslo peace process, which began with secret negotiations in 1993 and resulted in mutual recognition between Israel and the PLO.`
  },
  {
    id: 'oslo-accords',
    date: '1993-09-13',
    title: 'Oslo Accords',
    category: 'politics',
    lat: 59.91, lng: 10.75,
    connections: ['intifada', 'israel-creation'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bill_Clinton%2C_Yitzhak_Rabin%2C_Yasser_Arafat_at_the_White_House_1993-09-13.jpg/640px-Bill_Clinton%2C_Yitzhak_Rabin%2C_Yasser_Arafat_at_the_White_House_1993-09-13.jpg',
    description: `The Oslo Accords, signed on September 13, 1993, on the White House lawn, marked the first direct, face-to-face agreement between Israel and the Palestine Liberation Organization (PLO). The iconic handshake between Israeli Prime Minister Yitzhak Rabin and PLO Chairman Yasser Arafat, witnessed by President Bill Clinton, seemed to herald a new era of peace.

The accords established a framework for Palestinian self-governance in parts of the West Bank and Gaza through the Palestinian Authority, with the expectation that a final peace agreement would be negotiated within five years. Rabin, Arafat, and Israeli Foreign Minister Shimon Peres shared the Nobel Peace Prize in 1994.

However, the promise of Oslo was never fulfilled. Rabin was assassinated by an Israeli extremist in 1995, settlement expansion continued, and subsequent negotiations broke down. The Second Intifada (2000-2005) shattered the peace process. The Oslo framework's failure to deliver Palestinian statehood or end Israeli occupation has left a legacy of disillusionment on both sides.`
  },
  {
    id: 'mandela-release',
    date: '1990-02-11',
    title: 'Nelson Mandela Released from Prison',
    category: 'civil-rights',
    lat: -33.92, lng: 18.88,
    connections: ['nelson-mandela-prison', 'apartheid-end'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Nelson_Mandela-2008_%28edit%29.jpg/440px-Nelson_Mandela-2008_%28edit%29.jpg',
    description: `On February 11, 1990, Nelson Mandela walked out of Victor Verster Prison near Cape Town after 27 years of imprisonment, marking one of the most significant moments of the 20th century. An estimated one billion television viewers worldwide watched as Mandela emerged, raising his fist in triumph.

His release was ordered by President F.W. de Klerk, who had begun dismantling apartheid laws and unbanned the ANC and other opposition organizations. De Klerk recognized that the apartheid system was unsustainable in the face of international sanctions, internal resistance, and growing isolation.

Mandela immediately began negotiations with the government for a peaceful transition to democracy. Despite enormous obstacles — including political violence that killed thousands during the transition period — Mandela and de Klerk navigated their country toward its first fully democratic elections in 1994, for which they jointly received the Nobel Peace Prize in 1993.`
  },
  {
    id: 'german-reunification',
    date: '1990-10-03',
    title: 'German Reunification',
    category: 'politics',
    lat: 52.52, lng: 13.40,
    connections: ['berlin-wall-fall'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bundesarchiv_Bild_183-1990-1003-400%2C_Berlin%2C_deutsche_Vereinigung%2C_vor_dem_Reichstag.jpg/640px-Bundesarchiv_Bild_183-1990-1003-400%2C_Berlin%2C_deutsche_Vereinigung%2C_vor_dem_Reichstag.jpg',
    description: `On October 3, 1990, Germany was officially reunified when the former East Germany (German Democratic Republic) was absorbed into the Federal Republic of Germany. The event came less than a year after the fall of the Berlin Wall and marked the end of 45 years of division.

Reunification was achieved through the "Two Plus Four" negotiations involving the two German states and the four wartime Allied powers (US, UK, France, Soviet Union). Chancellor Helmut Kohl championed rapid reunification, promising that eastern Germany would become a "blooming landscape" within a few years.

The reality proved more challenging. The economic disparity between east and west required massive transfer payments — over $2 trillion by some estimates. Unemployment soared in the east, and cultural differences persisted for decades ("wall in the head"). Nevertheless, German reunification was one of the most significant peaceful political transformations of the 20th century and a testament to the triumph of democratic aspirations.`
  },
  {
    id: 'dolly-clone',
    date: '1996-07-05',
    title: 'Dolly the Sheep — First Cloned Mammal',
    category: 'space-tech',
    lat: 55.87, lng: -3.32,
    connections: [],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Dolly_the_sheep_2016.JPG/440px-Dolly_the_sheep_2016.JPG',
    description: `On July 5, 1996, Dolly the sheep was born at the Roslin Institute in Scotland, becoming the first mammal cloned from an adult somatic cell. Created by Ian Wilmut and Keith Campbell, Dolly was cloned using nuclear transfer from a mammary gland cell of a six-year-old Finn Dorset sheep.

Dolly's birth was announced in February 1997 and generated enormous public interest and ethical debate. The successful cloning of a mammal demonstrated that specialized adult cells could be reprogrammed to create an entirely new organism — overturning the scientific consensus that differentiated cells could not revert to a totipotent state.

Dolly lived for six years before being euthanized due to progressive lung disease. Her legacy includes advances in stem cell research, regenerative medicine, and ongoing debates about the ethics of cloning technology and its potential applications to humans.`
  },
  {
    id: 'hong-kong-handover',
    date: '1997-07-01',
    title: 'Hong Kong Handover to China',
    category: 'decolonization',
    lat: 22.32, lng: 114.17,
    connections: ['chinese-revolution'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Hong_Kong_Handover.jpg/440px-Hong_Kong_Handover.jpg',
    description: `On July 1, 1997, the United Kingdom returned sovereignty of Hong Kong to the People's Republic of China after 156 years of British colonial rule. The handover was conducted under the "one country, two systems" framework, which promised Hong Kong would retain its capitalist economy, legal system, and civil liberties for 50 years.

The handover ceremony at the Hong Kong Convention and Exhibition Centre was attended by Prince Charles, Prime Minister Tony Blair, President Jiang Zemin, and thousands of dignitaries. For many Hong Kong residents, the event brought mixed emotions — pride in reunion with China tempered by anxiety about the future of freedoms under Communist rule.

Those anxieties proved prescient. Over the following decades, Beijing gradually tightened its grip on Hong Kong, culminating in the 2019-2020 pro-democracy protests and the imposition of a sweeping National Security Law in 2020 that effectively dismantled the territory's political freedoms and independent media.`
  },
  {
    id: 'global-war-terror-london',
    date: '2005-07-07',
    title: '7/7 London Bombings',
    category: 'terrorism',
    lat: 51.51, lng: -0.13,
    connections: ['sept-11', 'war-on-terror'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Russell_square_ambulances.jpg/640px-Russell_square_ambulances.jpg',
    description: `On July 7, 2005, four suicide bombers struck London's public transport system during the morning rush hour, detonating three bombs on Underground trains and one on a double-decker bus. The coordinated attacks killed 52 victims and injured over 700 people — the deadliest terrorist attack in British history.

The bombers were British-born Muslims of Pakistani descent, who had been radicalized and carried out the attacks in protest of British involvement in the Iraq War. The fact that the attackers were homegrown — born and raised in the UK — raised profound questions about integration, radicalization, and domestic security.

The 7/7 attacks hardened British resolve in the War on Terror while fueling debates about civil liberties, surveillance, and multiculturalism. They demonstrated that the terrorist threat extended beyond foreign operatives to include radicalized citizens, fundamentally changing approaches to counterterrorism in Europe.`
  },
  {
    id: 'fukushima',
    date: '2011-03-11',
    title: 'Fukushima Nuclear Disaster',
    category: 'nuclear',
    lat: 37.42, lng: 141.03,
    connections: ['chernobyl'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Fukushima_I_by_Digital_Globe.jpg/640px-Fukushima_I_by_Digital_Globe.jpg',
    description: `On March 11, 2011, a magnitude 9.0 earthquake off Japan's coast triggered a massive tsunami that struck the Fukushima Daiichi Nuclear Power Plant, causing three reactor meltdowns. It was the worst nuclear disaster since Chernobyl and the only other event rated at Level 7 on the International Nuclear Event Scale.

The tsunami disabled the plant's cooling systems, leading to hydrogen explosions and the release of radioactive contamination over a wide area. Over 150,000 residents were evacuated from the surrounding region. The cleanup effort, expected to take decades, has involved removing spent fuel, managing contaminated water, and decommissioning the damaged reactors.

The Fukushima disaster had far-reaching consequences for nuclear energy policy worldwide. Germany accelerated its nuclear phase-out, and several countries reconsidered their nuclear programs. Japan shut down all 54 of its nuclear reactors for safety inspections, and public opposition to nuclear power surged globally.`
  },
  {
    id: 'bin-laden-killed',
    date: '2011-05-02',
    title: 'Osama bin Laden Killed',
    category: 'terrorism',
    lat: 34.17, lng: 73.24,
    connections: ['sept-11', 'war-on-terror'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Obama_and_Biden_await_updates_on_bin_Laden.jpg/640px-Obama_and_Biden_await_updates_on_bin_Laden.jpg',
    description: `On May 2, 2011, U.S. Navy SEALs from SEAL Team Six killed al-Qaeda leader Osama bin Laden during a raid on his compound in Abbottabad, Pakistan. The operation, codenamed Neptune Spear, was authorized by President Barack Obama after months of intelligence work traced bin Laden to the compound.

Bin Laden had been the world's most wanted man since the September 11, 2001 attacks. Despite the largest manhunt in history, he had evaded capture for nearly a decade, apparently living in the Abbottabad compound for several years — just a mile from Pakistan's military academy, raising questions about Pakistani intelligence's knowledge.

The killing of bin Laden was celebrated in the United States as a moment of justice, though it did not end the War on Terror. Al-Qaeda continued operating through regional affiliates, and the ideology of jihadist violence had already spawned new movements, most notably ISIS. Bin Laden's death was a symbolic milestone but not a strategic endpoint.`
  },
  {
    id: 'isis-rise',
    date: '2014-06-29',
    title: 'Rise of ISIS',
    category: 'terrorism',
    lat: 36.34, lng: 43.15,
    connections: ['iraq-war', 'syrian-civil-war'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Mosul_liberation.jpg/640px-Mosul_liberation.jpg',
    description: `On June 29, 2014, the Islamic State of Iraq and Syria (ISIS) declared a worldwide caliphate, with its leader Abu Bakr al-Baghdadi proclaiming himself caliph. ISIS had rapidly conquered large swaths of territory in Iraq and Syria, including Mosul, Iraq's second-largest city, in a stunning offensive that routed Iraqi security forces.

ISIS distinguished itself through extreme brutality — mass executions, beheadings, sexual slavery, and the destruction of ancient cultural sites. Its sophisticated social media campaign attracted tens of thousands of foreign fighters from around the world. The group carried out or inspired devastating terrorist attacks in Paris, Brussels, Istanbul, and many other cities.

A U.S.-led coalition, along with Iraqi and Kurdish forces, gradually reclaimed ISIS territory. Mosul was liberated in July 2017, and the last ISIS territorial holdout fell in March 2019. Al-Baghdadi was killed in a U.S. raid in October 2019. However, ISIS continues as an insurgent and terrorist network, with affiliates active across Africa and Asia.`
  },
  {
    id: 'paris-attacks',
    date: '2015-11-13',
    title: 'Paris Attacks',
    category: 'terrorism',
    lat: 48.86, lng: 2.35,
    connections: ['isis-rise', 'sept-11'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Paris_Shootings_-_The_day_after_%2822593744177%29.jpg/640px-Paris_Shootings_-_The_day_after_%2822593744177%29.jpg',
    description: `On November 13, 2015, coordinated terrorist attacks struck multiple locations across Paris, killing 130 people and injuring over 400. The attackers, affiliated with ISIS, carried out shootings and suicide bombings at the Bataclan concert hall, the Stade de France, and several restaurants and cafés.

The Bataclan attack was the deadliest single incident, where gunmen opened fire during an Eagles of Death Metal concert, killing 90 people. The coordinated nature of the attacks — six locations struck almost simultaneously — demonstrated sophisticated planning and execution. The attackers were European nationals who had traveled to Syria for training.

The Paris attacks were the deadliest in France since World War II and prompted President Hollande to declare a state of emergency that lasted nearly two years. The attacks intensified the European debate over immigration, border security, and the integration of Muslim communities, and strengthened resolve to combat ISIS militarily in Iraq and Syria.`
  },
  {
    id: 'climate-paris',
    date: '2015-12-12',
    title: 'Paris Climate Agreement',
    category: 'politics',
    lat: 48.86, lng: 2.35,
    connections: [],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/COP21_participants_-_30_Nov_2015_%2823430273715%29.jpg/640px-COP21_participants_-_30_Nov_2015_%2823430273715%29.jpg',
    description: `The Paris Agreement, adopted on December 12, 2015, was a landmark international treaty on climate change. Nearly 200 countries agreed to limit global warming to well below 2°C above pre-industrial levels, with efforts to limit it to 1.5°C. Each country submitted voluntary emissions reduction targets (Nationally Determined Contributions).

The agreement represented a breakthrough after decades of failed climate negotiations. Unlike the Kyoto Protocol, which imposed binding targets only on developed countries, the Paris Agreement required all nations to contribute. It also established mechanisms for transparency, financial support for developing nations, and regular review of progress.

However, the agreement faces significant challenges. The U.S. withdrew under President Trump (later rejoining under Biden), and most countries' commitments remain insufficient to meet the temperature targets. As of 2025, global temperatures have already risen approximately 1.2°C above pre-industrial levels, and extreme weather events are intensifying worldwide.`
  },
  {
    id: 'trump-election',
    date: '2016-11-08',
    title: 'Donald Trump Elected President',
    category: 'politics',
    lat: 40.71, lng: -74.01,
    connections: ['brexit'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/440px-Donald_Trump_official_portrait.jpg',
    description: `On November 8, 2016, businessman and television personality Donald Trump defeated Hillary Clinton to become the 45th President of the United States, in one of the most stunning electoral upsets in American political history. Despite losing the popular vote by nearly 3 million votes, Trump won the Electoral College 304 to 227.

Trump's campaign broke virtually every rule of conventional politics. His populist message — "Make America Great Again" — resonated with working-class voters who felt left behind by globalization and cultural change. His victory was fueled by economic anxiety, immigration concerns, and deep distrust of political elites.

Trump's presidency was among the most polarizing in American history, marked by immigration restrictions, tax cuts, trade wars, two impeachments, the COVID-19 pandemic response, and culminating in the January 6, 2021 Capitol attack. His political movement reshaped the Republican Party and reflected broader trends toward populism and democratic backsliding worldwide.`
  },
  {
    id: 'george-floyd',
    date: '2020-05-25',
    title: 'George Floyd & BLM Protests',
    category: 'civil-rights',
    lat: 44.93, lng: -93.26,
    connections: ['civil-rights-movement'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Thousands_of_Minnesotans_march_to_the_Minnesota_State_Capitol.jpg/640px-Thousands_of_Minnesotans_march_to_the_Minnesota_State_Capitol.jpg',
    description: `On May 25, 2020, George Floyd, a 46-year-old Black man, was murdered by Minneapolis police officer Derek Chauvin, who knelt on Floyd's neck for over nine minutes. Bystander video of Floyd's death — including his words "I can't breathe" — sparked the largest protest movement in American history.

In the weeks following Floyd's death, an estimated 15–26 million people participated in Black Lives Matter protests across all 50 states and in over 60 countries. The protests called attention to systemic racism and police brutality, and prompted widespread debate about policing, criminal justice reform, and racial equity.

Chauvin was convicted of murder in April 2021 — a rare instance of a police officer being held criminally accountable. The movement led to some police reforms, corporate diversity pledges, and a broader reckoning with racial inequality, though the extent and durability of systemic change remains debated.`
  },
  {
    id: 'jan-6-capitol',
    date: '2021-01-06',
    title: 'January 6 Capitol Attack',
    category: 'politics',
    lat: 38.89, lng: -77.01,
    connections: ['trump-election'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2021_storming_of_the_United_States_Capitol_DSC09254-2_%2850826223403%29.jpg/640px-2021_storming_of_the_United_States_Capitol_DSC09254-2_%2850826223403%29.jpg',
    description: `On January 6, 2021, a mob of supporters of President Donald Trump stormed the United States Capitol building in an attempt to prevent the certification of Joe Biden's presidential election victory. The attack resulted in five deaths, 140 injured police officers, and extensive damage to the Capitol.

The assault followed a rally near the White House where Trump encouraged supporters to "fight like hell" and march to the Capitol. The rioters breached police lines, smashed windows, and occupied the Senate chamber and Congressional offices, forcing lawmakers to evacuate. The certification was delayed for hours before resuming that evening.

The January 6 attack was widely described as an insurrection and the most serious assault on American democratic institutions since the Civil War. Over 1,200 people were subsequently charged with crimes. Trump was impeached for a second time (though acquitted by the Senate) and later faced federal and state criminal charges related to efforts to overturn the election. The event deepened America's political polarization and raised fundamental questions about the resilience of democratic norms.`
  }
];

// Category colors
export const categoryColors = {
  'war': '#ef4444',
  'politics': '#3b82f6',
  'genocide': '#991b1b',
  'nuclear': '#f59e0b',
  'civil-rights': '#10b981',
  'economic': '#8b5cf6',
  'space-tech': '#06b6d4',
  'pandemic': '#ec4899',
  'terrorism': '#f97316',
  'decolonization': '#84cc16'
};

export const categoryLabels = {
  'war': 'Wars & Conflicts',
  'politics': 'Political Events',
  'genocide': 'Genocide & Atrocities',
  'nuclear': 'Nuclear',
  'civil-rights': 'Civil Rights',
  'economic': 'Economic',
  'space-tech': 'Space & Technology',
  'pandemic': 'Pandemics',
  'terrorism': 'Terrorism',
  'decolonization': 'Decolonization'
};