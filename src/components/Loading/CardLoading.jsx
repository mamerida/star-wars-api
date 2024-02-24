import React from 'react'

export default function CardLoading() {
  return (
    <div class="shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-2 py-1">
                    <div class="rounded-lg bg-slate-600 h-40 w-30"></div>
                    <div class="h-6 bg-slate-700 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-4 gap-4">
                            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                        </div>
                        <div class="grid grid-cols-4 gap-4">
                            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}
