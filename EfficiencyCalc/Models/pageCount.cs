using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EfficiencyCalc.Models
{
    public class PageCount
    {
        public int Id { get; set; }
        public string worker { get; set; }
        public int inspectedPages { get; set; }
        public int associations { get; set; }
        public int ads { get; set; }
        public int timeSpentOnAds { get; set; }
        public Department department { get; set; }
        public Shift shift { get; set; }
    }
}
