"use client";

import OscilloscopeWaveform from "./OscilloscopeWaveform";
import CodeSnippet from "./CodeSnippet";

export default function TechShowcase() {
    return (
        <section className="py-24 relative bg-slate-50/50 dark:bg-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    
                    {/* Left: Code snippet */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-heading font-bold text-text mb-4">
                            Firmware that never blocks
                        </h2>
                        <p className="text-lg text-muted mb-8">
                            We write deterministic, interrupt-driven C/C++ firmware. Our real-time OS (RTOS) integrations guarantee millisecond latency for critical tasks.
                        </p>
                        
                        <div className="relative group">
                            {/* Decorative glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            
                            <CodeSnippet language="cpp" filename="sensor_task.cpp" code={`void vSensorTask(void *pvParameters) {
    SensorData_t data;
    TickType_t xLastWakeTime = xTaskGetTickCount();
    
    for(;;) {
        // Non-blocking I2C read
        if(I2C_Read_DMA(SENSOR_ADDR, &data) == OK) {
            // Signal processing
            ApplyKalmanFilter(&data);
            
            // Queue for transmission
            xQueueSend(xMqttQueue, &data, 0);
        }
        
        // Exact 10ms deterministic loop
        vTaskDelayUntil(&xLastWakeTime, pdMS_TO_TICKS(10));
    }
}`}>
                                {/* Since we don't have shiki natively running on the client easily, we mock the highlighted HTML */}
                                <pre className="text-[#a0aec0] font-mono text-xs md:text-sm">
                                    <code>
<span className="text-[#c678dd]">void</span> <span className="text-[#61afef]">vSensorTask</span>(<span className="text-[#c678dd]">void</span> *pvParameters) {'{\n'}
    <span className="text-[#e5c07b]">SensorData_t</span> data;{'\n'}
    <span className="text-[#e5c07b]">TickType_t</span> xLastWakeTime = <span className="text-[#61afef]">xTaskGetTickCount</span>();{'\n\n'}
    <span className="text-[#c678dd]">for</span>(;;) {'{\n'}
        <span className="text-[#5c6370] italic">// Non-blocking I2C read</span>{'\n'}
        <span className="text-[#c678dd]">if</span>(<span className="text-[#61afef]">I2C_Read_DMA</span>(SENSOR_ADDR, &amp;data) == <span className="text-[#d19a66]">OK</span>) {'{\n'}
            <span className="text-[#5c6370] italic">// Signal processing</span>{'\n'}
            <span className="text-[#61afef]">ApplyKalmanFilter</span>(&amp;data);{'\n\n'}
            <span className="text-[#5c6370] italic">// Queue for transmission</span>{'\n'}
            <span className="text-[#61afef]">xQueueSend</span>(xMqttQueue, &amp;data, <span className="text-[#d19a66]">0</span>);{'\n'}
        {'}\n\n'}
        <span className="text-[#5c6370] italic">// Exact 10ms deterministic loop</span>{'\n'}
        <span className="text-[#61afef]">vTaskDelayUntil</span>(&amp;xLastWakeTime, <span className="text-[#61afef]">pdMS_TO_TICKS</span>(<span className="text-[#d19a66]">10</span>));{'\n'}
    {'}\n'}
{'}'}
                                    </code>
                                </pre>
                            </CodeSnippet>
                        </div>
                    </div>

                    {/* Right: Waveform */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-text mb-4">
                                Hardware validation
                            </h2>
                            <p className="text-lg text-muted">
                                We measure signal integrity, power supply noise, and RF performance to ensure rock-solid stability before tape-out.
                            </p>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                            <OscilloscopeWaveform />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
