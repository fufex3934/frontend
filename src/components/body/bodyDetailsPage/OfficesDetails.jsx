import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { BiPhone } from 'react-icons/bi';
import { FaFax } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Footer from '../Footer'
import Navs from '../../navbars/navs';
import { useParams } from 'react-router-dom';
const OfficesDetails = () => {
    const offices = [
        {
            id: 1,
            name: "Harari Revenue Authority",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4034622.023926607!2d39.39637685096437!3d9.0582399348193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd49d4295cdf%3A0x988d210b602a9ca5!2sHarar%20People&#39;s%20Regional%20State%20Revenue%20Authority%20Bureau!5e0!3m2!1sen!2snl!4v1686336149715!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Providing comprehensive coverage and quality of international audit services based on professional freedom, in collaboration with the Regional Council, auditing agencies, accountants, private auditors, corporations and offices, as well as the public to ensure good governance and government performance. Develop competency and accountability.",
            vision:"To be a model by 2022 among the best Auditor General offices nationwide. 5. Increase public participation 6. Improving effective resource and budget utilization 7. Improving basic process change standard and",
            coreValues:"It is our tool for up-to-date and up-to-date information, Professional freedom is our guarantee for our audit work, We work for transparency and accountability  We operate independently of audit professional ethics.",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 2,
            name: "Harari Office of the Auditor General",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15748.857476247716!2d42.1166823!3d9.3142647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd09ec7c9013%3A0x7a5033c42f6935c7!2sHarari%20Audit%20General!5e0!3m2!1sen!2snl!4v1686372091181!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Providing comprehensive coverage and quality of international audit services based on professional freedom, in collaboration with the Regional Council, auditing agencies, accountants, private auditors, corporations and offices, as well as the public to ensure good governance and government performance. Develop competency and accountability.",
            vision:"To be a model by 2022 among the best Auditor General offices nationwide. 5. Increase public participation 6. Improving effective resource and budget utilization 7. Improving basic process change standard and",
            coreValues:"It is our tool for up-to-date and up-to-date information, Professional freedom is our guarantee for our audit work, We work for transparency and accountability  We operate independently of audit professional ethics.",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 3,
            name: "Harari Education Bureau",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7874.47034685118!2d42.1158655935791!3d9.312418599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bda486b5cba3%3A0xb3b327d0c590a97!2sHarari%20Education%20Bureau!5e0!3m2!1sen!2snl!4v1686372232915!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Creating a personality generation that contributes to the development and growth of the region by providing quality and competent education that ensures quality, competency and sustainable development; Using formal and informal educational programs; supporting education through research; To make our region the center of education and training by properly utilizing the resources acquired by mobilizing the community and mobilizing partner organizations",
            vision:"Make our region the center of education and training by 2020 by creating a generation that will play a role in development and good governance by providing equitable and quality education",
            coreValues:"Effectiveness,fairness,participation, perseverance,excellence,research,rent-seeking, and developmental thinking.",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 4,
            name: "Municipality Of Harar City",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31497.881444042814!2d42.10041574581897!3d9.312417971707147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd1ebebd15d1%3A0xdfb9e938a86b524a!2z4YiA4Yio4YitLeGMjOGLrSDhiJjhiL7hiYDhiI3hibIg4YyL4YitIEhhcmFyIE11bmljaXBhbGl0eSDhi6jhiJDhiKjhiK0g4Yqo4Ymw4YibIOGIm-GLmOGMi-GMgyDhiaThibU!5e0!3m2!1sen!2snl!4v1686372291951!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Providing comprehensive coverage and quality of international audit services based on professional freedom, in collaboration with the Regional Council, auditing agencies, accountants, private auditors, corporations and offices, as well as the public to ensure good governance and government performance. Develop competency and accountability.",
            vision:"To be a model by 2022 among the best Auditor General offices nationwide. 5. Increase public participation 6. Improving effective resource and budget utilization 7. Improving basic process change standard and",
            coreValues:"It is our tool for up-to-date and up-to-date information, Professional freedom is our guarantee for our audit work, We work for transparency and accountability  We operate independently of audit professional ethics.",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 5,
            name: "Vice President of Harari People's Region and Head of Agriculture Development Bureau",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7874.488014733045!2d42.11657969357912!3d9.311634600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd850146e27f%3A0x2dcbb3b0e2f53aa3!2sOffice%20of%20the%20President%20of%20Harari%20People&#39;s%20Regional%20State!5e0!3m2!1sen!2snl!4v1686372661239!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Providing comprehensive coverage and quality of international audit services based on professional freedom, in collaboration with the Regional Council, auditing agencies, accountants, private auditors, corporations and offices, as well as the public to ensure good governance and government performance. Develop competency and accountability.",
            vision:"To be a model by 2022 among the best Auditor General offices nationwide. 5. Increase public participation 6. Improving effective resource and budget utilization 7. Improving basic process change standard and",
            coreValues:"It is our tool for up-to-date and up-to-date information, Professional freedom is our guarantee for our audit work, We work for transparency and accountability  We operate independently of audit professional ethics.",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 6,
            name: "Harari Ethics and Anti-Corruption Commission",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62995.68669279613!2d42.04020515483724!3d9.31284058373532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bda3c73a509d%3A0x47a0ad82e9e99ed6!2sHarar%2C%20Ethiopia!5e0!3m2!1sen!2snl!4v1686372855041!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Providing comprehensive coverage and quality of international audit services based on professional freedom, in collaboration with the Regional Council, auditing agencies, accountants, private auditors, corporations and offices, as well as the public to ensure good governance and government performance. Develop competency and accountability.",
            vision:"To be a model by 2022 among the best Auditor General offices nationwide. 5. Increase public participation 6. Improving effective resource and budget utilization 7. Improving basic process change standard and",
            coreValues:"It is our tool for up-to-date and up-to-date information, Professional freedom is our guarantee for our audit work, We work for transparency and accountability  We operate independently of audit professional ethics.",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 7,
            name: "Harar Health Bureau",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7874.532066170067!2d42.11641893720493!3d9.30967956305293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd99b6c2173f%3A0x97f396b265090f95!2sHarari%20Health%20Bureau!5e0!3m2!1sen!2snl!4v1686373289955!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Protect the health and well-being of the people of the region by providing and supervising a quality, fair and accessible universal health service package",
            vision:"To see the nature of a healthy, productive and prosperous society",
            coreValues:"Community,Loyalty and Sincerity, Loyalty and Honesty, Transparency and Accountability and Confidentiality,Non-discrimination, Law-enforcement,Model, Collaboration,Professionalism,Readiness for change,Compassion",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 8,
            name: "Attorney General",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.234780535425!2d42.11989077207265!3d9.312453466937422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bdbba1070e69%3A0xd6e2f590f6480476!2sHarari%20Attorney%20General!5e0!3m2!1sen!2snl!4v1686373662141!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Respect and uphold the Constitution, human rights and the law; Protecting the interests of the government and the people; raising public awareness; providing accessible, efficient, fair and effective justice",
            vision:"Ensure the implementation of an impartial, accountable, credible, participatory, equitable, and inclusive law enforcement agency by 2022, raising awareness, providing accessible, efficient, fair and effective justice services.",
            coreValues:"Priority for human dignity, A firm belief in the rule of law, Equality and fairness, Transparency and accountability Abomination of rent-seeking and corrupt practices, Cooperation and partnership, Neutrality,Efficiency and effectiveness and  Readiness for change and new knowledge",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 9,
            name: "Urban Construction Development Bureau",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.2375511041596!2d42.12528607397488!3d9.312207590760849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bdfd8aa865ef%3A0xba2bd3a7cac56481!2sUrban%20Development%20%26%20Construction%20Bureau!5e0!3m2!1sen!2snl!4v1686374067416!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Respect and uphold the Constitution, human rights and the law; Protecting the interests of the government and the people; raising public awareness; providing accessible, efficient, fair and effective justice",
            vision:"Ensure the implementation of an impartial, accountable, credible, participatory, equitable, and inclusive law enforcement agency by 2022, raising awareness, providing accessible, efficient, fair and effective justice services.",
            coreValues:"Priority for human dignity, A firm belief in the rule of law, Equality and fairness, Transparency and accountability Abomination of rent-seeking and corrupt practices, Cooperation and partnership, Neutrality,Efficiency and effectiveness and  Readiness for change and new knowledge",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 10,
            name: "Cultural Heritage And Tourism Bureau",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.2549587309595!2d42.135229573974875!3d9.310662590762336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd2073e7eb23%3A0xbd11769a49131c38!2sHarar%20People&#39;s%20Regional%20State%20Culture%2C%20Heritage%20and%20Tourism%20Bureau!5e0!3m2!1sen!2snl!4v1686374185816!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Ensure that the region's culture, heritage, language and tourism resources are 50% of the region's total social sector based on tourism through the proper recognition, registration, study, care, maintenance and development of tourism.",
            vision:"  By developing the region's culture, heritage and language sectors as a resource for tourism, by supporting technology and creating job opportunities for the community and youth, by 2022 the region's total social sector revenue will be 50% in the tourism sector.",
            coreValues:"Peace and tolerance, Hospitality, Tolerance, Accountability, Strive fro Change, Readiness, Participation, Inclusion of Women and People with disabilities",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 11,
            name: "Peace and Security Administration Bureau",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.2439297261376!2d42.11685047397484!3d9.311641490761414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd1046390f49%3A0x2c66a6ea6b91445c!2sHarar%20People&#39;s%20Regional%20State%20Peace%20and%20Security%20Administration%20Bureau!5e0!3m2!1sen!2snl!4v1686374414718!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Ensure that the region's culture, heritage, language and tourism resources are 50% of the region's total social sector based on tourism through the proper recognition, registration, study, care, maintenance and development of tourism.",
            vision:"  By developing the region's culture, heritage and language sectors as a resource for tourism, by supporting technology and creating job opportunities for the community and youth, by 2022 the region's total social sector revenue will be 50% in the tourism sector.",
            coreValues:"Peace and tolerance, Hospitality, Tolerance, Accountability, Strive fro Change, Readiness, Participation, Inclusion of Women and People with disabilities",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 12,
            name: "Public Service and Human Resource development Bureau",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2016660.1150054499!2d39.12393208938179!3d9.173471337797512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd5fc1ef6689%3A0x847055c38e342ef9!2sHarar%20People&#39;s%20Regional%20State%20Public%20Service%20and%20Human%20Resource%20Development%20Bureau!5e0!3m2!1sen!2snl!4v1686374515027!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Ensure that the region's culture, heritage, language and tourism resources are 50% of the region's total social sector based on tourism through the proper recognition, registration, study, care, maintenance and development of tourism.",
            vision:"  By developing the region's culture, heritage and language sectors as a resource for tourism, by supporting technology and creating job opportunities for the community and youth, by 2022 the region's total social sector revenue will be 50% in the tourism sector.",
            coreValues:"Peace and tolerance, Hospitality, Tolerance, Accountability, Strive fro Change, Readiness, Participation, Inclusion of Women and People with disabilities",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 13,
            name: "Office of Women, Youth and Children",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2016687.3013316877!2d39.12384168263826!3d9.168687148487962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631894b3b86b1d1%3A0x9356604a15e351e4!2sHarar%20People&#39;s%20Regional%20State%20Women%2C%20Youth%20and%20Children&#39;s%20Bureau!5e0!3m2!1sen!2snl!4v1686374604049!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Ensure that the region's culture, heritage, language and tourism resources are 50% of the region's total social sector based on tourism through the proper recognition, registration, study, care, maintenance and development of tourism.",
            vision:"  By developing the region's culture, heritage and language sectors as a resource for tourism, by supporting technology and creating job opportunities for the community and youth, by 2022 the region's total social sector revenue will be 50% in the tourism sector.",
            coreValues:"Peace and tolerance, Hospitality, Tolerance, Accountability, Strive fro Change, Readiness, Participation, Inclusion of Women and People with disabilities",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 14,
            name: "Transport and Road Development Bureau",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15748.940380347098!2d42.11311008141044!3d9.312425552168522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd9770435bc9%3A0x407d41658148d5d9!2sHarari%20Transport%20Office!5e0!3m2!1sen!2snl!4v1686374699643!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Ensure that the region's culture, heritage, language and tourism resources are 50% of the region's total social sector based on tourism through the proper recognition, registration, study, care, maintenance and development of tourism.",
            vision:"  By developing the region's culture, heritage and language sectors as a resource for tourism, by supporting technology and creating job opportunities for the community and youth, by 2022 the region's total social sector revenue will be 50% in the tourism sector.",
            coreValues:"Peace and tolerance, Hospitality, Tolerance, Accountability, Strive fro Change, Readiness, Participation, Inclusion of Women and People with disabilities",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 15,
            name: "Enterprise Development and Industry Bureau",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.2436638170534!2d42.12464397397487!3d9.311665090761409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bda6bea71f51%3A0x87e989a7c882f896!2sHarar%20People&#39;s%20Regional%20State%20Enterprises%20Development%20and%20Industry%20Bureau!5e0!3m2!1sen!2snl!4v1686374789203!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Ensure that the region's culture, heritage, language and tourism resources are 50% of the region's total social sector based on tourism through the proper recognition, registration, study, care, maintenance and development of tourism.",
            vision:"  By developing the region's culture, heritage and language sectors as a resource for tourism, by supporting technology and creating job opportunities for the community and youth, by 2022 the region's total social sector revenue will be 50% in the tourism sector.",
            coreValues:"Peace and tolerance, Hospitality, Tolerance, Accountability, Strive fro Change, Readiness, Participation, Inclusion of Women and People with disabilities",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 16,
            name: "President Office",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.2440074706165!2d42.12353197397477!3d9.31163459076142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd850146e27f%3A0x2dcbb3b0e2f53aa3!2sOffice%20of%20the%20President%20of%20Harari%20People&#39;s%20Regional%20State!5e0!3m2!1sen!2snl!4v1686374868339!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Ensure that the region's culture, heritage, language and tourism resources are 50% of the region's total social sector based on tourism through the proper recognition, registration, study, care, maintenance and development of tourism.",
            vision:"  By developing the region's culture, heritage and language sectors as a resource for tourism, by supporting technology and creating job opportunities for the community and youth, by 2022 the region's total social sector revenue will be 50% in the tourism sector.",
            coreValues:"Peace and tolerance, Hospitality, Tolerance, Accountability, Strive fro Change, Readiness, Participation, Inclusion of Women and People with disabilities",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 17,
            name: "Supreme Court",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.2295324925085!2d42.12421847397492!3d9.312919190760189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bde91873b00f%3A0x775f8cc42b4890b6!2sHarar%20People&#39;s%20Regional%20State%20Supreme%20Court!5e0!3m2!1sen!2snl!4v1686374952355!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Ensure that the region's culture, heritage, language and tourism resources are 50% of the region's total social sector based on tourism through the proper recognition, registration, study, care, maintenance and development of tourism.",
            vision:"  By developing the region's culture, heritage and language sectors as a resource for tourism, by supporting technology and creating job opportunities for the community and youth, by 2022 the region's total social sector revenue will be 50% in the tourism sector.",
            coreValues:"Peace and tolerance, Hospitality, Tolerance, Accountability, Strive fro Change, Readiness, Participation, Inclusion of Women and People with disabilities",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 18,
            name: "State Council Office",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.242793870101!2d42.12121359678958!3d9.311742299999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bdcf920041f5%3A0x9865d341f7a51b6a!2sHarar%20People&#39;s%20Regional%20State%20Council%20Office!5e0!3m2!1sen!2snl!4v1686375046692!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Approve the government's plan and strategy by studying the laws that will enable it to be implemented quickly. Monitoring and monitoring performance and strengthening the executive capacity of the wereda and kebele councils at all levels to provide the necessary support to enable them to perform their duties efficiently and ensure the full benefit of the people of the region.",
            vision:"  To see a region of good governance, development, peace and democracy in 2017.",
            coreValues:"Rule of Law, Participation, Transparency, Accountability, gain Public trust, Public Partisanship, Provide accessible and fast service, Avoid bias, Respect culture and traditions of the people ",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 19,
            name: "Police Commission",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.21674946176!2d42.12761747397501!3d9.314053490759068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bda92e990889%3A0x3d04a4f37744dadb!2sHarari%20Police%20Commission!5e0!3m2!1sen!2snl!4v1686375340068!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Approve the government's plan and strategy by studying the laws that will enable it to be implemented quickly. Monitoring and monitoring performance and strengthening the executive capacity of the wereda and kebele councils at all levels to provide the necessary support to enable them to perform their duties efficiently and ensure the full benefit of the people of the region.",
            vision:"  To see a region of good governance, development, peace and democracy in 2017.",
            coreValues:"Rule of Law, Participation, Transparency, Accountability, gain Public trust, Public Partisanship, Provide accessible and fast service, Avoid bias, Respect culture and traditions of the people ",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 20,
            name: "Environment Protection Authority",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62995.46841966738!2d42.08899229118984!3d9.314051115697033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bf84636e219b%3A0xb236b222e1190200!2sHarar%20People&#39;s%20Regional%20State%20Environmental%20Protection%20Authority%20Agency!5e0!3m2!1sen!2snl!4v1686375430504!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Establish a sustainable environmental use and management system by ensuring the participation and benefit of various environmental policies, strategies and laws enacted at the federal and regional levels.",
            vision:"  Establish a sustainable environmental use and management system by ensuring the participation and benefit of various environmental policies, strategies and laws enacted at the federal and regional levels.",
            coreValues:"Loyalty and trustworthiness, Accountability for the work you have decided and done, Submission to the rule of law, Transparency, Serve the people and the citizen without discrimination, Effectiveness, Serve the people and citizens with determination, diligence, initiative and dignity, Working hard day and night to overcome poverty, All work is honorable",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 21,
            name: "Technical and Vocational Education Agency",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15748.796963048288!2d42.08374748715819!3d9.315606900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd7a256af113%3A0x599315eb58c12199!2zSGFyYXJpIFRWRVQgQWdlbmN5IOGIgOGIqOGIqiDhibThiq3hipLhiq3hipMg4YiZ4YurIOGKpOGMgOGKleGIsg!5e0!3m2!1sen!2snl!4v1686375738925!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Establish a sustainable environmental use and management system by ensuring the participation and benefit of various environmental policies, strategies and laws enacted at the federal and regional levels.",
            vision:"  Establish a sustainable environmental use and management system by ensuring the participation and benefit of various environmental policies, strategies and laws enacted at the federal and regional levels.",
            coreValues:"Loyalty and trustworthiness, Accountability for the work you have decided and done, Submission to the rule of law, Transparency, Serve the people and the citizen without discrimination, Effectiveness, Serve the people and citizens with determination, diligence, initiative and dignity, Working hard day and night to overcome poverty, All work is honorable",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 22,
            name: "Harari Mass Media Agency",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.24961168306!2d42.12554527397481!3d9.311137190761844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd67950feb79%3A0xb0a798512fa774fe!2sHarar%20People&#39;s%20Regional%20State%20Mass%20Media%20Agency!5e0!3m2!1sen!2snl!4v1686375835423!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"The modernization of the media in the region, free from partisanship, and providing accurate and up-to-date information on the rapid development of the Harari region; Develop public awareness and awareness as a reliable source of information for good governance and building a democratic system.  Promote the culture, history and public values ​​of the region and build a positive image of the region",
            vision:"  One of the best media institutions in the world by 2022 is to create an information-rich, tolerant and balanced society.",
            coreValues:" Improving information quality, coverage and accessibility, Develop information to build a positive image,  Develop information to ensure social change, Provide efficient, effective and equitable service, Increase public participation,  Improving effective resource and budget utilization, Improving basic process change standard and efficiency,  Increase the effectiveness of interpersonal and multi-sectoral issues",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 23,
            name: "Water And Severage Authority",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.2147332015084!2d42.121287773974906!3d9.314232390758924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bdf4d4b32e57%3A0xe61f53de6c78f0e9!2sHarar%20People&#39;s%20Regional%20State%20Water%20and%20Sewerage%20Authority!5e0!3m2!1sen!2snl!4v1686376044554!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Carrying out repairs, upgrades and new procurement and installation works on water supply, pumping and transmission facilities to increase water supply to Harar town and neighboring towns and rural areas",
            vision:"  One of the best media institutions in the world by 2022 is to create an information-rich, tolerant and balanced society.",
            coreValues:" Improving information quality, coverage and accessibility, Develop information to build a positive image,  Develop information to ensure social change, Provide efficient, effective and equitable service, Increase public participation,  Improving effective resource and budget utilization, Improving basic process change standard and efficiency,  Increase the effectiveness of interpersonal and multi-sectoral issues",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          {
            id: 24,
            name: "Harar Region Prosperity Party",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15748.85893988838!2d42.11356293114333!3d9.314232233658696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd26de974b67%3A0xc3a1fdb97a96942f!2z4Yuo4YiA4Yio4YiqIOGKreGIjeGIjSDhiaXhiI3hjYXhjI3hipMg4Y2W4Yit4YmyIOGMvS_hiaThibUgSGFyYXJpIFByb3NwZXJpdHkgUGFydHkgT2ZmaWNl!5e0!3m2!1sen!2snl!4v1686376141518!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Carrying out repairs, upgrades and new procurement and installation works on water supply, pumping and transmission facilities to increase water supply to Harar town and neighboring towns and rural areas",
            vision:"  One of the best media institutions in the world by 2022 is to create an information-rich, tolerant and balanced society.",
            coreValues:" Improving information quality, coverage and accessibility, Develop information to build a positive image,  Develop information to ensure social change, Provide efficient, effective and equitable service, Increase public participation,  Improving effective resource and budget utilization, Improving basic process change standard and efficiency,  Increase the effectiveness of interpersonal and multi-sectoral issues",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
          
          
          
    ];

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
      }, []);
    
    const {id} = useParams();
    

    // Find the woreda object with the matching ID
  const selectedOffice = offices.find((office) => office.id === parseInt(id));
  


  if (!selectedOffice) {
    return <p>Office not found.</p>; // Handle the case when the office ID is not valid
  }
  return (
    <>
     <Navs/>
       <div className='container mx-auto p-8 mt-18 md:mt-24 lg:my-10 max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 '>
            {/* left div */}
            <div className='md:mr-24'>
                <h1 className='text-4xl capitalize font-serif mb-4'>{selectedOffice.name}</h1>
                <h1 className='font-bold uppercase text-xl'>Mission</h1>
                <p className='text-md my-6'>{selectedOffice.mission}</p>
                <h2 className=' font-bold uppercase text-xl mb-4'>Vision</h2>
                <p>{selectedOffice.vision}</p>
                <h2 className='font-bold uppercase text-xl my-4'>core values</h2>
                <p className='text-md my-6'>{selectedOffice.coreValues}</p>
            </div>
            {/* right div */}
            <div className='flex flex-col'>
            <motion.div
                className="bg-white rounded-lg p-6 md:py-8 lg:p-4 shadow hover:shadow-lg transition-shadow mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="flex items-center text-slate-600 ">
                  <FiMapPin size={28} className="mr-2 bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif whitespace-nowrap mr-1'>Address: </span> {selectedOffice.address}
                </p>
                <p className="flex items-center text-slate-600 my-4">
                  <BiPhone size={28} className="mr-2  bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif mr-1'>Phone: </span>{selectedOffice.phone}
                </p>
                <p className="flex items-center text-slate-600">
                  <FaFax size={28} className="mr-2  bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif mr-1'>Fax Numb: </span>{selectedOffice.fax}
                </p>
                <p className="flex items-center text-slate-600 mt-4">
                  <AiOutlineMail size={28} className="mr-2  bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif mr-1'>Email: </span>{selectedOffice.email}
                </p>
              </motion.div>
              <div className="justify-center  md:justify-end ">
                  <div dangerouslySetInnerHTML={{ __html: selectedOffice.location }} />
            </div>
            </div>
            

        </div>

       </div>
     <Footer/>
    </>
  )
}

export default OfficesDetails
