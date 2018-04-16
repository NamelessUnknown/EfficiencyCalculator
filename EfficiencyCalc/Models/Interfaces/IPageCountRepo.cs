using EfficiencyCalc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EfficiencyCalc.Interfaces
{
    public interface IPageCountRepo
    {
        PageCount GetPageCount(int Id);
        List<PageCount> GetManyPageCounts();
        int AddPageCount(PageCount pageCount);
        int UpdatePageCount(PageCount pageCount);
        void DeletePageCount(PageCount pageCount);
    }
}
